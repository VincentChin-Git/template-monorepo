import { IHttpData, IHttpErrorData } from "@packages/types";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

import EnvConfig from "../config";

const baseUrl = EnvConfig.serviceUrl;

const getRequest = async (url: string, params: any) => {
  const authToken = localStorage.getItem("authToken");
  const headers = authToken
    ? {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    : { "Content-Type": "application/json" };
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        params,
        headers,
      })
      .then((res) => {
        const data: IHttpData = res.data;
        console.log(data, url);
        if (data.success) resolve(data);
        else {
          toast.remove();
          toast.error("Please try again later");
          reject(new Error("Please try again later"));
        }
      })
      .catch((error) => {
        const errParse = error as AxiosError;
        const err = errParse.response?.data as IHttpErrorData;
        console.log(err, url);
        if (!err || !err.errMessage) return reject(new Error(""));
        toast.remove();
        toast.error(err.errMessage);
        reject(new Error(err.errMessage));
      });
  });
};

const postRequest = async (url: string, data: any) => {
  const authToken = localStorage.getItem("authToken");

  const headers = authToken
    ? {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      }
    : { "Content-Type": "application/json" };
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data, { headers })
      .then((res) => {
        const data: IHttpData = res.data;
        console.log(data, url);
        if (data.success) resolve(data);
        else {
          toast.remove();
          toast.error("Please try again later");
          reject(new Error("Please try again later"));
        }
      })
      .catch((error) => {
        const errParse = error as AxiosError;
        const err = errParse.response?.data as IHttpErrorData;
        console.log(err, url);
        if (!err || !err.errMessage) return reject(new Error(""));
        toast.remove();
        toast.error(err.errMessage);
        reject(new Error(err.errMessage));
      });
  });
};

const request = { get: getRequest, post: postRequest };

export default request;
