import React, { useEffect, useState } from "react";

import classes from './Login.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const Login = () => {
    
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]:value
        })

        //If there are no errors while onChanging, then set errors object to null
        if(!!errors[field]) {
            setErrors({
                ...errors, 
                [field]:null
            })
        }
    }

    const validateForm = () => {
        const {email, password} = form;

        const newErrors = {}

        if(!email || email === '') {
            newErrors.email = "Please enter an email";
        }
        
        if(!password || password === '') {
            newErrors.password = "Please enter a password";
        }

        return newErrors;

    }

    const handleSubmit  = (e) => {
        e.preventDefault();

        const formErrors = validateForm();

        //If there are errors, then set the erros object
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            console.log("Form sent!");
            console.log(form);
        }
    }
    
    return(
        <div>
            <div className={classes.Form}>
                <div className={classes.LoginText}>
                    <h1>Login Required</h1>
                </div>
                <Forms>
                    <Forms.Group className={classes.Email} controlId="formBasicEmail">
                        <Forms.Label>E-Mail</Forms.Label> <br />
                        <Forms.Control onChange={(e) => setField('email', e.target.value)} isInvalid={!!errors.email} name="email" required type="email" />
                    </Forms.Group>
                    <Forms.Control.Feedback type='invalid'>
                        {errors.email}
                    </Forms.Control.Feedback>
                    <Forms.Group className={classes.Password} controlId="formBasicPassword">
                        <Forms.Label>Password</Forms.Label> <br />
                        <Forms.Control name="password" onChange={(e) => setField('password', e.target.value)} isInvalid={!!errors.password} required type="password" />
                    </Forms.Group>
                    <Forms.Control.Feedback type='invalid'>
                        {errors.password}
                    </Forms.Control.Feedback>
                    <div className={classes.ButtonGroup}>
                        <Button onClick={handleSubmit} className={classes.SignupButton} variant="primary" type="button">
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