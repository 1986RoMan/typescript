import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks";
import {airportActions} from "../redax/slices/airport.slice";
import { Button } from 'react-bootstrap';

const AirportForm:FC = () => {
    const dispatch = useAppDispatch();
    const {register,handleSubmit} = useForm();
    const {airports} = useAppSelector(state => state.airports);
    const submit:SubmitHandler<object> = async (search) => {
        console.log(search)
      await  dispatch(airportActions.searchAirports({search}))
    }
    console.log(airports)
    console.log(document.getElementsByClassName('www')[0])
    return (
        <div >
             <form className={'www'} onSubmit={handleSubmit(submit)}>
                 <input placeholder={"Search"} {...register('Search')}></input>
                 <button>Search</button>
             </form>

        </div>
    );
};

export {AirportForm};