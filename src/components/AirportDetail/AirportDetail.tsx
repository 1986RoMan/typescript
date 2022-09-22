import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {FilterForm} from "../FilterForm";
import {airportsService} from "../../services/airoports.service";
import {Iairport} from "../../interfaces/airports.interface";
import {Airport} from "../Airport";
import styled, {keyframes} from "styled-components";

 export interface IairportDetail {
    continent: string
    coordinates: string
    country: string
    elevation_ft: string
    gps_code: string
    iata_code: string
    ident: string
    local_code: string
    municipality: string
    name: string
    region: string
    type: string
}


const AirportDetail:FC = () => {
    const [airport,setAirport] = useState<IairportDetail>();
  const params = useParams<{id:string}>();
    const id=params.id
   // console.log(id)
    useEffect(()=>{
        airportsService.getById(`${id}`).then(({data})=>setAirport(data)
        )
    },[id])
    console.log(airport)

    const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
    const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


    ;
    return (
        <div>
            <Rotate>&lt; 💅🏾 &gt;</Rotate>
            {airport &&<div>{airport.region}</div>}
            {airport &&<div>{airport.country}</div>}
            {airport &&<div>{airport.type}</div>}
            {airport &&<div>{airport.name}</div>}
            {airport &&<div>{airport.local_code}</div>}
            {airport &&<div>{airport.continent}</div>}
            {airport &&<div>{airport.coordinates}</div>}
            {airport &&<div>{airport.elevation_ft}</div>}
            {airport &&<div>{airport.gps_code}</div>}
            {airport &&<div>{airport.iata_code}</div>}
            {airport &&<div>{airport.ident}</div>}
            {airport &&<div>{airport.municipality}</div>}

        </div>
    );
};

export {AirportDetail};