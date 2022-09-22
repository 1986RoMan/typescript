import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {airportReducer} from "./slices";
import {bookReducer} from "./slices/handBooksSlice";


const rootReducer=combineReducers({
  airports:airportReducer,
    boook:bookReducer
})

const store = configureStore({
    reducer:rootReducer
    }
)
type RootState = ReturnType<typeof store.getState>
//type RootState=ReturnType<typeof rootReducer>
type AppStore=ReturnType<typeof store.getState>
//type AppDispatch=AppStore['dispatch']
type AppDispatch = typeof store.dispatch


export type {
    RootState,
    AppDispatch,
    AppStore
}
export {store}