import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Iairport, IServerResponse} from "../../interfaces/airports.interface";
import {airportsService} from "../../services/airoports.service";
import {itemPage} from "../../components";

interface IState {
    airports: Iairport[],
    count:number,
    filterAirports:Iairport[]
    loading:boolean
}

const initialState: IState = {
    airports: [],
    count:0,
    filterAirports:[],
    loading:true
}


const allAirports = createAsyncThunk<IServerResponse<Iairport>,{page:number}>(
    'airportSlice/allAirports',
    async ({page}) => {
        console.log(page)
        const {data} = await airportsService.getAll(page,itemPage)
        return data
    }
);
const searchAirports = createAsyncThunk<Iairport[],{search:any}>(
    'airportSlice/searchAirports',
    async ({search}) => {
        console.log(search.Search)
        const {data} = await airportsService.searchAll(search.Search)
        return data.results
    }
);
const airportSlice = createSlice({
    name: 'airportSlice',
    initialState,
    reducers: {
    filtrachij:(state,action)=>{
        state.filterAirports=action.payload
       // console.log(state.filterAirports)
    }
    },
    extraReducers: builder => {
        builder
            .addCase(allAirports.pending,((state, action) => {
               // state.loading =true
            }))
            .addCase(allAirports.fulfilled, ((state, action) => {
                state.airports = action.payload.results
                state.count=action.payload.count
                state.loading=false
            }))
            .addCase(searchAirports.fulfilled, ((state, action) => {
                state.airports = action.payload
                //console.log(JSON.stringify(state.airports))
            }))
    }
});

const {reducer: airportReducer,actions:{filtrachij}} = airportSlice
const airportActions = {
    allAirports,
    searchAirports,
    filtrachij
}

export {
    airportActions,
    airportReducer

}
