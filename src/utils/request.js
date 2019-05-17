import axios from "axios";
import Vue from "vue";

const alert = new Vue().$message;

const instance = axios.create({
  baseURL: "api",
  timeout: 30000
});

export default (method, url, params = {}, option = {}) => {
  if (!["get", "post", "delete", "put"].includes(method)) {
    console.error("请求方法错误，请检查封装方法参数");
    return;
  }

  return new Promise((y, n) => {
    instance[method](url, params, { ...option })
      .then(res => {
        alert.success(res.data.msg);
        y(res.data);
      })
      .catch(err => {
        alert.error(err.response.data.msg);
        n(err.response.data);
      });
  });
};
