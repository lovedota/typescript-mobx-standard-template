/* eslint-disable @typescript-eslint/no-explicit-any */
// @flow

import axios, { AxiosResponse } from 'axios';

interface HttpConfig {
  headers: Record<string, string>;
  baseURL: string;
  apiVersion: string;
}

const httpClient = axios.create();

const responseInterceptor = (response: AxiosResponse<any>): any => {
  if (response && response.data) {
    return response.data;
  }

  return response;
};

httpClient.interceptors.response.use(responseInterceptor);

function get<T>(url: string, config?: HttpConfig): Promise<T> {
  return httpClient.get(url, config);
}

function post<T>(url: string, data?: any, config?: HttpConfig): Promise<T> {
  return httpClient.post(url, config);
}

export default httpClient;

export { get, post };
