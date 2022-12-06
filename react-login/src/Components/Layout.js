import React, {useState, useCallback} from "react";
import classes from './Layout.module.css';

import Header from './Header/Header';
import Form from './Form/Form';
import Users from './Users/Users';
import HomePlace from './Places/HomePlace';
import AddPlace from  './Places/AddPlace';
import EditPlace from './Places/EditPlace';
import Authenticate from './Form/Login';
import { AuthContext } from './Context/auth-context';

import {Routes, Route, redirect} from 'react-router-dom';

const Layout = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(()=> {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(()=> {
        setIsLoggedIn(false);
    }, []);


    let routes;

    if(isLoggedIn) {
        routes = (
            <React.Fragment>
                <Route exact path="/" element={<Users />} />
                <Route exact path="/signup" element={<Form />} />
                <Route exact path="/:userid/places" element={<HomePlace />} />
                <Route exact path="/addplaces" element={<AddPlace />} />
                <Route exact path="/addplaces/:placeid" element={<EditPlace />} />
            </React.Fragment>
        );
    }
    else {
        routes = (
            <React.Fragment>
                <Route exact path="/" element={<Users />} />
                <Route exact path="/signup" element={<Form />} />
                <Route exact path="/:userid/places" element={<HomePlace />} />
                <Route exact path="/auth" element={<Authenticate />} />
            </React.Fragment>
        );
    }

    return(
        <div className={classes.Layout}>
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login,logout: logout}}>
                <Header />
                <Routes>
                    {routes}    
                    {/* <Route exact path="/" element={<Users />} />
                    <Route exact path="/signup" element={<Form />} />
                    <Route exact path="/:userid/places" element={<HomePlace />} />
                    <Route exact path="/addplaces" element={<AddPlace />} />
                    <Route exact path="/addplaces/:placeid" element={<EditPlace />} />
                    <Route exact path="/auth" element={<Authenticate />} /> */}
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}
//MAKE ALL USERS LINK FOR ALL USERS
export default Layout;