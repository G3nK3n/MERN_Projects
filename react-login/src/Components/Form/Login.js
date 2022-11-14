import React from "react";

import classes from './Login.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const Login = () => {
    return(
        <div>
            <div className={classes.Form}>
                <div className={classes.LoginText}>
                    <h1>Login Required</h1>
                </div>
                <Forms>
                    <Forms.Group className={classes.Email} controlId="formBasicEmail">
                        <Forms.Label>E-Mail</Forms.Label> <br />
                        <Forms.Control name="email" required type="email" />
                    </Forms.Group>
                    <Forms.Group className={classes.Password} controlId="formBasicPassword">
                        <Forms.Label>Password</Forms.Label> <br />
                        <Forms.Control name="password" required type="password" />
                    </Forms.Group>
                    <div className={classes.ButtonGroup}>
                        <Button className={classes.SignupButton} variant="primary" type="button">
                            Login
                        </Button>
                        <br />
                    </div>
                </Forms>
            </div>
        </div>
    )
}

export default Login;