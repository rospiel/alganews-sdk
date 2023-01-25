import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import handleAxiosResponseError from "./utils/handleAxiosResponseError";
import handleAxiosResponseSuccess from "./utils/handleAxiosResponseSuccess";

const Http = axios.create()

class Service {
  protected static Http = Http;
  protected static getData = getdata;

  public static setRequestConfig(onFulfilled: (
    request: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, onRejected?: (error: any) => any) {
    
    Http.interceptors.request.use(onFulfilled, onRejected);
  }
}

function getdata<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL = 'http://localhost:8080';
Http.interceptors.response.use(handleAxiosResponseSuccess, handleAxiosResponseError);

export default Service;