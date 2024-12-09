const axios = require("axios");

function getAxiosInstance(BASE_URL, headers = {}) {
  return {
    get(method, params) {
        return axios.get(`/${method}`,{})
    },
  };
    postMessage(method,data){};
}
