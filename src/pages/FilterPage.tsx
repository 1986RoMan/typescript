import React, {FC, useState} from 'react';
import {useAppSelector} from "../hooks";
import {Airport, Header, itemPage} from "../components";
import ReactPaginate from "react-paginate";

const FilterPage:FC = () => {
  //  const [page,setPage] = useState(1);
    const {count,filterAirports} = useAppSelector(state => state.airports);
    console.log(filterAirports)
    //const pageCount=Math.ceil(count/itemPage);

    // const handlePageClick = ({selected}: { selected: number }) => {
    //     console.log(selected)
    //     setPage(selected+1)
    // };

    return (
        <div>
          
            <div style={{
                marginTop: '40px',
                marginLeft: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '200px'
            }}>
                {filterAirports.map(airport => <Airport key={airport.id} airport={airport}/>)}

            </div>
            {/*<div>*/}
            {/*    {pageCount&& <ReactPaginate*/}
            {/*        breakLabel="..."*/}
            {/*        nextLabel="next >"*/}
            {/*        forcePage={page - 1}*/}
            {/*        onPageChange={handlePageClick}*/}
            {/*        pageRangeDisplayed={1}*/}
            {/*        pageCount={pageCount}*/}
            {/*        previousLabel="< previous"*/}
            {/*        containerClassName='Pagination'*/}
            {/*        activeClassName="Pagination__active"*/}
            {/*        pageLinkClassName="Pagination__page-link"*/}
            {/*        breakLinkClassName="Pagination__page-link"*/}
            {/*        nextLinkClassName="Pagination__page-link"*/}
            {/*        previousLinkClassName="Pagination__page-link"*/}
            {/*        pageClassName="Pagination__page-item"*/}
            {/*        breakClassName="Pagination__page-item"*/}
            {/*        nextClassName="Pagination__page-item"*/}
            {/*        previousClassName="Pagination__page-item"*/}
            {/*    />}*/}
            {/*</div>*/}

        </div>
    );
};


export  {FilterPage};