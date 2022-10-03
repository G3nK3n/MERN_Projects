import React from "react";
import classes from './Layout.module.css';

import Header from './Header/Header';
import Form from './Form/Form';
import Users from './Users/Users';
import HomePlace from './Places/HomePlace';
import AddPlace from  './Places/AddPlace';

import {Routes, Route} from 'react-router-dom';

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <Header />
            <Routes>    
                <Route exact path="/" element={<Users />} />
                <Route exact path="/signup" element={<Form />} />
                <Route exact path="/:userid/places" element={<HomePlace />} />
                <Route exact path="/addplaces" element={<AddPlace />} />
            </Routes>
        </div>
    )
}

export default Layout;