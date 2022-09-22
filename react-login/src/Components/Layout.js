import React from "react";
import classes from './Layout.module.css';

import Header from './Header/Header';
import Form from './Form/Form';
import Home from './Home/Home';

import {Routes, Route} from 'react-router-dom';

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <Header />
            <Routes>    
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<Form />} />
            </Routes>
        </div>
    )
}

export default Layout;