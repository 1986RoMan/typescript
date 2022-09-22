import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {airportActions} from "../../redax";
import {Airport} from "../Airport";
import ReactPaginate from "react-paginate";
import css from './Airport.module.css';
import './Pagination.scss'
import {booksAction} from "../../redax/slices/handBooksSlice";
import {AirportDetail} from "../AirportDetail/AirportDetail";
import styledComponents from "styled-components";
import styled from "styled-components";


export const itemPage=30

const Airports:FC = () => {
    useEffect(()=>{
        dispatch(booksAction.allFilter())
    },[])
    const [page,setPage] = useState(1);
    const {airports,count,filterAirports,loading} = useAppSelector(state => state.airports);
    const dispatch = useAppDispatch();
    console.log(airports)
    let pageCount=Math.ceil(count/itemPage);
    useEffect(()=>{
        setTimeout(()=>{

        dispatch(airportActions.allAirports({page}))
        },1000)
    },[dispatch,page])

    const handlePageClick = ({selected}: { selected: number }) => {
        console.log(selected)
        setPage(selected+1)
    };
    console.log(page)
    const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  left: 48%;
  
  &:before{
    content: "by xXx";
  }
  
  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    background: #9925ea;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
    // if (loading) {
    //     return <Loading />
    // }
    return (
        <div style={{
                display: 'flex',
            flexDirection: 'column',
        }} >
            {loading && <Loading/>}
            <div style={{
            display: 'flex',
                flexWrap:'wrap',
                marginTop:'30px',


        }}>{
            airports.map(airport => <Airport key={airport.id} airport={airport}/>)
            }

            </div>
            <div>
                {pageCount&& <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    forcePage={page - 1}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    containerClassName='Pagination'
                    activeClassName="Pagination__active"
                    previousClassName="Pagination__page-item"
                />}
            </div>

        </div>
    );
};

export {Airports};