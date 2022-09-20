import React from "react";
import classes from './Form.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const Form = () => {
    return (
        <div className={classes.Form}>
            <div className={classes.LoginText}>
                <h1>Login Required</h1>
            </div>
            <Forms>
                <Forms.Group controlId="formBasicName">
                    <Forms.Label>Your Name</Forms.Label>
                    <Forms.Control type="name" />
                </Forms.Group>
                <Forms.Group controlId="formBasicEmail">
                    <Forms.Label>Email</Forms.Label>
                    <Forms.Control type="email" />
                </Forms.Group>
                <Forms.Group controlId="formBasicPassword">
                    <Forms.Label>Password</Forms.Label>
                    <Forms.Control type="password" />
                </Forms.Group>
                <Button variant="primary" type="button">
                    Signup
                </Button>
                <Button variant="primary" type="button">
                    Switch to Login
                </Button>
            </Forms>
        </div>
    )
}

export default Form;