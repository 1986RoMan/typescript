import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {airportActions} from "../../redax";
import {useNavigate} from "react-router-dom";
import {Iairport} from "../../interfaces/airports.interface";

const FilterForm = () => {

    const {regions, types, countries} = useAppSelector(state => state.boook);
    const {airports} = useAppSelector(state => state.airports);
    const {register, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    console.log(airports)
    console.log(countries)
    const navigate = useNavigate();
    const submit:SubmitHandler<object> = (opo:any) => {
        console.log(opo.type)
        const all = airports.filter(value1 => value1.country.includes(opo.type))
            .filter(value => value.type.includes(opo.types))
            .filter(value => value.region.includes(opo.typ));
        console.log(all)
        dispatch(airportActions.filtrachij(all))
        navigate('/filter')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('typ')}>
                    {regions.map(region => <option value={region}> {region}</option>)}
                </select>
                <select {...register('types')}>
                    {types.map(types => <option> {types}</option>)}
                </select>
                <select  {...register('type')}>
                    {countries.map(countries => <option> {countries}</option>)}
                </select>
                <button>Send</button>
            </form>
        </div>
    );
}
export {FilterForm};