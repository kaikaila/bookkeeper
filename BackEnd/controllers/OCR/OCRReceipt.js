const { getAxiosInstance } = require("./axios");
const { errorHandler } = require("./helpers");

const AxiosInstance = getAxiosInstance(
  "https://api.veryfi.com/api/v8/partner/documents",
  {
    "Content-Type": "application/json",
    Accept: "application/json",
    "CLIENT-ID": process.env.OCR_VERIFY_CLIENT_ID,
    AUTHORIZATION: process.env.OCR_VERIFY_AUTHORIZATION,
  }
);

async function processTheReceipt(fileURL) {
  return new Promise((resolve, reject) => {
    AxiosInstance.post("documents", { file_url: fileUrl })
      .then((response) => {
        // console.log(response);
        // resolve(response);
        let parsedData = null;
        if (response && response.data) {
          parsedData = parseTheData(response.data);
        }
        resolve(parsedData);
      })
      .catch((ex) => {
        errorHandler(ex, "processTheReceipt", "axios");
        reject(ex);
      });
  });
}

function parseTheData(data) {
  let finalData = {
    bill_date: new Date(data.date),
    items: [],
    payment: data.payment,
    reference_number: data.reference_number,
    total: data.total,
    vendor: {
      address: data.vendor.address,
      name: data.vendor.raw_name,
    },
  };
  data.line_items.forEach((item) => {
    finalData.items.push({
      name: item.description,
      total: item.total,
      quantity: item.quantity,
      price: item.price,
    });
  });
  return finalData;
}

module.exports = { processTheReceipt };
