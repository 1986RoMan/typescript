import {FC, ReactNode} from 'react';
import {Iairport} from "../interfaces/airports.interface";
import {Link, useNavigate} from "react-router-dom";

interface Iprops {
    airport:Iairport,
    children?:ReactNode
}
const Airport:FC<Iprops> = ({airport}) => {
const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            flexWrap:'wrap',
          // height:'250 px',
            border:'solid 2px black',
            //justifyContent: 'center',
            //alignItems: 'center',
            flexDirection:'column',
            width: '300px',

        }}>
            {/*onClick={()=>navigate(`${airport.id}`)}*/}
            <Link to={airport.id.toString()}>
                <div>{airport.name}</div>
                <div>{airport.type}</div>
                <div>{airport.country}</div>
                <div>{airport.local_code}</div>
                <div>{airport.region}</div>
            </Link>
            <br/>
        </div>
    );
};

export {Airport};