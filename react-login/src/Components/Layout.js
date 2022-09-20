import React from "react";
import classes from './Layout.module.css';

import Header from './Header/Header';
import Form from './Form/Form';

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <Header />
            <Form />
        </div>
    )
}

export default Layout;