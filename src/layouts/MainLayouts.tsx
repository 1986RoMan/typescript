import React, {FC} from 'react';
import {Header} from "../components";
import {AirportsPage} from "../pages";
import {Outlet} from "react-router-dom";

const MainLayouts:FC = () => {
    return (
        <div>
            {/*style={{backgroundImage:"url(https://klike.net/uploads/posts/2019-11/1573724735_11.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>*/}
        <Header/>
                <Outlet/>
        </div>
    );
};

export {MainLayouts};