import axios from "axios";
import { endpoint } from "./constants";
import { SetupInterceptors } from "./SetupInterceptors";

const httpAuthAxios = axios.create({
  baseURL: endpoint,
});

SetupInterceptors(httpAuthAxios);

export default httpAuthAxios;
