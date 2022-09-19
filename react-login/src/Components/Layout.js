import React from "react";
import classes from './Layout.module.css';

import Header from './Header/Header';

const Layout = () => {
    return(
        <div className={classes.Layout}>
            <Header />
        </div>
    )
}

export default Layout;