import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constans";

export type AxiosRes<T>=Promise<AxiosResponse<T>>;
const axiosService = axios.create({baseURL});

export {axiosService}
