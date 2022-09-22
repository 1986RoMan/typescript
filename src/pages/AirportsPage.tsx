import React, {FC} from 'react';
import {AirportForm, Airports, Header} from "../components";
import {Outlet} from "react-router-dom";
import {FilterForm} from "../components/FilterForm";

const AirportsPage:FC = () => {
    return (
        <div>
             <Airports/>
        </div>
    );
};

export {AirportsPage};