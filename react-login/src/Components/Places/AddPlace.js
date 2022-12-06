import React, {useState} from "react";
import classes from './AddPlace.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const AddPlace = () => {

    // ERROR: A component is changing an uncontrolled input to be controlled. (Because of objeect being empty?)
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
        const {title, description, address} = form;

        const  newErrors = {}

        if(!title || title === '') {
            newErrors.title = "Please enter a title";
        }
        
        if(!description || description === '') {
            newErrors.description = "Please enter a description";
        }
        
        if(!address || address ==='') {
            newErrors.address = "Please enter an address";
        }

        return newErrors;

    }

    const handleSubmit  = e => {
        e.preventDefault();

        const formErrors = validateForm();

        //If there are errors, then set the erros object
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            console.log(form)
        }
    }

    return(
        <div className={classes.Form}>
            {/* Make auth routes for edit and delete button */}
            <Forms>
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
                    <Forms.Control value={form.address} onChange={(e) => setField('address', e.target.value)} isInvalid={!!errors.address} name="address" required type="address" />
                </Forms.Group>
                <Forms.Control.Feedback type='invalid'>
                    {errors.address}
                </Forms.Control.Feedback>
                <div className={classes.ButtonGroup}>
                    <Button onClick={handleSubmit} className={classes.SignupButton} variant="primary" type="submit">
                        Signup
                    </Button>
                    <br />
                </div>
            </Forms>
        </div>
    )
}

export default AddPlace;