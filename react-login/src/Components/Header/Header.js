import React from "react";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className={classes.Header}>
            <div className={classes.YourPlace}>
                <Link to={"/"}><span><div>YourPlaces</div></span></Link>
            </div>
            <div className={classes.Links}>
                <ul>
                <li><Link to={"/"}>All Users</Link></li>
                    <li><a href="#">My Places</a></li>
                    <li><Link to={"/addplaces"}>Add Places</Link></li>
                    <li className={classes.Authenticate}><a href="#">Authenticate</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;