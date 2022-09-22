import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../constans";
import {Iairport, IServerResponse} from "../interfaces/airports.interface";
import IHandbooksState from "../redax/slices/handBooksSlice";
import {IairportDetail} from "../components";
import {AxiosResponse} from "axios";

type Res<T>=Promise<AxiosResponse<T>>
const airportsService = {
    getAll: (page:number,count:number): Res<IServerResponse<Iairport[]>> => axiosService.get(urls.airports, {
        params: {
            page: page,
            count
        }
    }),
    searchAll: (search:string): AxiosRes<IServerResponse<Iairport>> => axiosService.get(urls.airports, {
        params: {
            search:search ,
            count: 20
        }
    }),
    handbooksTypes:():AxiosRes<IHandbooksState>=>axiosService.get(urls.handbooksType),
    handbooksRegions:():AxiosRes<IHandbooksState>=>axiosService.get(urls.handbooksRegion),
    handbooksCountry:():AxiosRes<IHandbooksState>=>axiosService.get(urls.handbooksCountries),
    getById:(id:string):AxiosRes<IairportDetail>=>axiosService.get(`${urls.airports}/${id}`)
}

export {airportsService}