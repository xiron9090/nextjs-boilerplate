import Axios from "axios";
import { config } from "..";

export const customAxios = Axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
