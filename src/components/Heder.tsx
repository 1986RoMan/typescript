import React, {FC} from 'react';
import {AirportForm} from "./AirportForm";
import {FilterForm} from "./FilterForm/FilterForm";
import {useNavigate} from "react-router-dom";

const Header:FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{height:'130px',background:'blue'}}>
            <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                Airports
            </h1>
            <div style={{display:'flex', flexDirection:'column'}}>
                <FilterForm/>
                <AirportForm/>
            </div>
            <button onClick={()=>navigate('/home')}>На головну сторінку</button>
        </div>
    );
};

export {Header};