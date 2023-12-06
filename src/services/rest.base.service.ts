import axios, { AxiosError } from "axios";

async function get<T>(resource: string, params?: T) {
  try {
    return await axios.get(resource, { ...params });
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

async function put<T>(resource: string, body: T, params?: T) {
  try {
    return await axios.put(resource, body, { ...params });
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}
async function patch<T, D>(resource: string, body: T, params?: D) {
  try {
    return await axios.patch(resource, body, { ...params });
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

async function post<T>(resource: string, body: T) {
  try {
    return await axios.post(resource, body);
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError;
  }
}

export { get, put, patch, post };
