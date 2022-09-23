import React from "react";
import classes from './UsersItem.module.css';


const UsersItem = props => {
    return(
        <div className={classes.UsersItem}>
            <h1>Name: {props.name}</h1>
            <p>His ID is: {props.id}</p>
        </div>
    )
}

export default UsersItem;