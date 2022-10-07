import React, {useState} from "react";
import classes from './AddPlace.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const AddPlace = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]:value
        })

        if(!!errors[field]) {
            setErrors({
                ...errors, 
                [field]:null
            })
        }
    }


    // const [isValidated, setIsValidated] = useState(true);

    // const checkValidation = (event) => {
    //     const form  = event.target;
    //     const {title, description, address} = form;
    //     //FIX THIS VALIDATION PROP IN FORM
    //     // if(form.validated === false) {
    //     //     console.log(form.validated)
    //     //     event.preventDefault();
    //     // }
    //     // else {
    //     //     setValidation(true);
    //     // }

    //     if(!title.value || title.value.trim().length === 0) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         setIsValidated(false);
            
    //     }
    //     else {
    //         setIsValidated(true);
    //     }
        
        
    // }

    return(
        <div className={classes.Form}>
            <Forms noValidate>
                <Forms.Group className={classes.Name} controlId="formBasicName">
                    <Forms.Label>Title</Forms.Label> <br />
                    <Forms.Control value={form.title} onChange={(e) => setField('title', e.target.value)} isInvalid={!!errors.title} name="title" required type="name" />
                </Forms.Group>
                <Forms.Control.Feedback type='invalid'>
                    {errors.title}
                </Forms.Control.Feedback>
                <Forms.Group className={classes.Description} controlId="formBasicDescription">
                    <Forms.Label>Description</Forms.Label> <br />
                    <Forms.Control value={form.description} onChange={(e) => setField('description', e.target.value)} isInvalid={!!errors.description} name="description" required as="textarea" type="description" rows={3} />
                </Forms.Group>
                <Forms.Control.Feedback type='invalid'>
                    {errors.description}
                </Forms.Control.Feedback>
                <Forms.Group className={classes.Password} controlId="formBasicAddress">
                    <Forms.Label>Address</Forms.Label> <br />
                    <Forms.Control value={form.address} onChange={(e) => setField('address', e.target.value)} isInvalid={!!errors.address} name="address" required type="Address" />
                </Forms.Group>
                <Forms.Control.Feedback type='invalid'>
                    {errors.address}
                </Forms.Control.Feedback>
                <div className={classes.ButtonGroup}>
                    <Button className={classes.SignupButton} variant="primary" type="submit">
                        Signup
                    </Button>
                    <br />
                </div>
            </Forms>
        </div>
    )
}

export default AddPlace;