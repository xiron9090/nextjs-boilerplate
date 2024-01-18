import axios, { AxiosError, AxiosRequestConfig } from "axios";
import config from "../../.storybook/main";

async function get<T>(resource: string, config?: AxiosRequestConfig) {
  try {
    return await axios.get(resource, config);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

async function put<T>(resource: string, body: T, config?: AxiosRequestConfig) {
  try {
    return await axios.put(resource, body, config);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}
async function patch<T>(
  resource: string,
  body: T,
  config?: AxiosRequestConfig
) {
  try {
    return await axios.patch(resource, body, config);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

async function post<T>(resource: string, body: T, config?: AxiosRequestConfig) {
  try {
    return await axios.post(resource, body, config);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}
async function remove(resource: string, config?: AxiosRequestConfig) {
  try {
    return await axios.delete(resource, config);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

export { get, put, patch, post, remove };
