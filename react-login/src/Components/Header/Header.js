import React, {useContext} from "react";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from "../Context/auth-context";

const Header = () => {
    const auth = useContext(AuthContext);

    return(
        <div className={classes.Header}>
            <div className={classes.YourPlace}>
                <Link to={"/"}><span><div>YourPlaces</div></span></Link>
            </div>
            <div className={classes.Links}>
                <ul>
                <li><Link to={"/"}>All Users</Link></li>
                    {auth.isLoggedIn && 
                        //THIS WILL ONLY BE WHEN WH HAVE A BACKEND
                        <li><a href="#">My Places</a></li>
                    }
                    {auth.isLoggedIn && 
                        <li><Link to={"/addplaces"}>Add Places</Link></li>
                    }
                    {!auth.isLoggedIn && 
                        <li className={classes.Authenticate}><Link to={"/auth"}>Authenticate</Link></li>
                    }
                    {auth.isLoggedIn && 
                        //After logging out, page redirects to the home page?
                        //Make a function instead that calls the auth.logout, removing the link
                        <li className={classes.Authenticate} onClick={auth.logout}><Link to={"/"}>Logout</Link></li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;