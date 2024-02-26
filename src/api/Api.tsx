import axios, { AxiosInstance, AxiosResponse } from "axios";

// use these methods in your application to call API.
// use ".then/.catch" rather than using "async/await" to handle errors more specifically in your component.
// use base server url here from .env file. Don't mention base url in API methods use only path.

const getInitialized = (
  contentType: string = "application/json",
  params: Record<string, string> | undefined = undefined
): AxiosInstance => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL,
    params: params,
    headers: { "Content-Type": contentType },
  });
};

// GET
export const getRequest = (
  url: string,
  params?: Record<string, string>,
  contentType?: string
): Promise<AxiosResponse<any, any>> => {
  return getInitialized(contentType, params).get(url);
};

// POST
export const postRequest = (
  url: string,
  contentType: string,
  data: unknown
): Promise<AxiosResponse<any, any>> => {
  return getInitialized(contentType).post(url, data);
};