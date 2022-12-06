import React, { useState, useContext } from "react";

import classes from './Login.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';
import { AuthContext } from "../Context/auth-context";

const Login = () => {
    
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const [isSwitched, setIsSwitched] = useState(false)


    const switchHandler = () => {
        setIsSwitched(!isSwitched)
        setErrors({})
        setForm({})

        //This method clears the form inputs after switching
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = '')
        );
    }

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

    const validateForm = (e) => {
        
        const {name, email, password} = form;

        const newErrors = {}

        if(isSwitched) {
            if(!name || name === '') {
                newErrors.name = "Please enter your name";
            }
    
            if(!email || email === '') {
                newErrors.email = "Please enter an email";
            }
            
            if(!password || password === '') {
                newErrors.password = "Please enter a password";
            }
        }
        else {
            if(!email || email === '') {
                newErrors.email = "Please enter an email";
            }
            
            if(!password || password === '') {
                newErrors.password = "Please enter a password";
            }
        }
        

        return newErrors;

    }

    const handleSubmit  = (e) => {
        e.preventDefault();

        const formErrors = validateForm(e);

        //If there are errors, then set the erros object
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            console.log("Form sent!");
            console.log(form);
            auth.login();
        }
    }
    
    return(
        <div>
            <div className={classes.Form}>
                <div className={classes.LoginText}>
                    <h1>Login Required</h1>
                </div>
                {isSwitched ? 
                <Forms>
                    <Forms.Group className={classes.Name} controlId="formBasicName">
                        <Forms.Label>Name</Forms.Label> <br />
                        <Forms.Control onChange={(e) => setField('name', e.target.value)} isInvalid={!!errors.name} name="name" required type="name" />
                    </Forms.Group>
                    <Forms.Control.Feedback type='invalid'>
                        {errors.name}
                    </Forms.Control.Feedback>

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
                </Forms>  
                : <Forms>
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

                    </Forms>}
                <div className={classes.ButtonGroup}>
                    <Button onClick={handleSubmit} className={classes.SignupButton} variant="primary" type="button">
                        {isSwitched ? 'Signup' : 'Login'}
                    </Button>
                    <br />
                    <Button onClick={switchHandler} className={classes.SignupButton2} type="button">
                        {isSwitched ? 'Switch to Login' : 'Switch to Signup'}
                    </Button>
                </div>  
            </div>
        </div>
    )
}

export default Login;