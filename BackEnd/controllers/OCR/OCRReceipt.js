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
        console.log(response);
        resolve(response);
      })
      .catch((ex) => {
        errorHandler(ex, "processTheReceipt", "axios");
        reject(ex);
      });
  });
}

module.exports = { processTheReceipt };
