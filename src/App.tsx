import React, {FC} from 'react';
import {AirportDetail, Airports, Header} from "./components";
import {Routes,Route,Navigate} from "react-router-dom";
import {MainLayouts} from "./layouts/MainLayouts";
import {FilterPage} from "./pages/FilterPage";
import {AirportsPage} from "./pages";

const App:FC = () => {

    return (
       <Routes>
           <Route path={'/'} element={<MainLayouts/>}>
           <Route index element={<Navigate to={'home'} />}/>
           <Route path={'home'} element={<AirportsPage />}/>
               <Route path={'home/:id'} element={<AirportDetail/>}/>
           <Route path={'filter'} element={<FilterPage/>}/>
</Route>
       </Routes>
    );
};

export {App};