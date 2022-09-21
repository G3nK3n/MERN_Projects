import React, { useState } from "react";
import classes from './Form.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const Form = () => {

    const [username, getUsername] = useState("");
    const [isEmpty, getIsEmpty] = useState(true);

    /* FIX NON-BLANK INPUT WHEN ERASING EVERYTHING */
    const checkUsername = (e) => {
        getUsername(e.target.value.trim());
        if(username.length < 0) {
            getIsEmpty(true);
        }
        else {
            getIsEmpty(false);
        }
    }

    return (
        <div className={classes.Form}>
            <div className={classes.LoginText}>
                <h1>Login Required</h1>
            </div>
            <Forms>
                <Forms.Group className={classes.Name} controlId="formBasicName">
                    <Forms.Label>Your Name</Forms.Label> <br />
                    <Forms.Control onChange={theChange => checkUsername(theChange)} type="name" />
                </Forms.Group>
                <div className={classes.NameText}>
                    {/* Add a " username=="" " to check if there is whitespace? It works after erasing the input */}
                    <p>{isEmpty || username==""? "Please enter a name." : " "}</p>
                </div>
                <Forms.Group className={classes.Email} controlId="formBasicEmail">
                    <Forms.Label>Email</Forms.Label> <br />
                    <Forms.Control type="email" />
                </Forms.Group>
                <Forms.Group className={classes.Password} controlId="formBasicPassword">
                    <Forms.Label>Password</Forms.Label> <br />
                    <Forms.Control type="password" />
                </Forms.Group>
                <div className={classes.ButtonGroup}>
                    <Button className={classes.SignupButton} variant="primary" type="button">
                        Signup
                    </Button>
                    <br />
                    <Button className={classes.SwitchLoginButton} variant="primary" type="button">
                        Switch to Login
                    </Button>
                </div>
            </Forms>
        </div>
    )
}

export default Form;