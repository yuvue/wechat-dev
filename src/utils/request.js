import axios from "axios";
import qs from "querystring";
import { Message } from "element-ui";

const concatURL = (url, obj) => {
  return `${url}/?${qs.stringify(obj)}`;
};

const instance = axios.create({
  baseURL: "/api",
  timeout: 30000
});

export default (method, url, params = {}, option = {}) => {
  if (!["get", "post", "delete", "put", "patch"].includes(method)) {
    console.error("请求方法错误，请检查封装方法参数");
    return;
  }

  if (method === "get") {
    url = concatURL(url, params);
  }

  return new Promise((y, n) => {
    instance[method](url, params, { ...option })
      .then(res => {
        res && res.data && res.data.msg && Message.success(res.data.msg);
        y(res.data);
      })
      .catch(err => {
        err &&
          err.response &&
          err.response.data &&
          err.response.data.msg &&
          Message.error(err.response.data.msg);
      });
  });
};
