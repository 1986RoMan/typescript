import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {airportsService} from "../../services/airoports.service";

export type IAirportsType = string
export type IAirportsRegion = string
export type IAirportsCountry = string

export default interface IHandbooksState {
    types: IAirportsType[]
    regions: IAirportsRegion[]
    countries: IAirportsCountry[]
}

const initialState: IHandbooksState = {
    types: [],
    regions: [],
    countries: []
}
const allFilter = createAsyncThunk<any>(
    'handBooksSlice/allFilter',
    async () => {
        const data = await Promise.all([
            airportsService.handbooksTypes(),
            airportsService.handbooksCountry(),
            airportsService.handbooksRegions()
        ])
        return data

    }
);

const handBooksSlice = createSlice({
    name: 'handBooksSlice',
    initialState,
    reducers: {},
    extraReducers:builder => {
        builder
            .addCase(allFilter.fulfilled,((state, action) => {
                state.types=action.payload[0].data
                state.countries=action.payload[1].data
                state.regions=action.payload[2].data
                // console.log(state.types)
                // console.log(state.countries)
                // console.log(state.regions)
            }))
    }
});
const{reducer:bookReducer,actions}=handBooksSlice
const booksAction={
    allFilter
}
export {
    booksAction,
    bookReducer
}