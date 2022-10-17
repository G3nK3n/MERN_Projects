import React, { useEffect, useState } from "react";
import classes from './EditPlace.module.css';

import { useParams } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const EditPlace = () => {
    
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const placeId = useParams().placeid;
    
    const DUMMY_PLACES=[
        {
            id: 'p1',
            place: 'New York', 
            address: 'Somewhere in US',
            description:  'The Big Apple', 
            creator: 'u1'
        },  
        {
            id: 'p2',
            place: 'Montreal', 
            address: 'Somewhere in Canada',
            description: 'Home of Poutine', 
            creator: 'u2'
        }
        //DOES NOT WORK YET WITH MULTIPLE PLACE ID WITH SAME CREATOR

        // {
        //     id: 'p3',
        //     place: 'Tokyo', 
        //     address: 'Somewhere in Japan',
        //     description:  'Land of the Rising Sun', 
        //     creator: 'u1'
        // }
    ];

    const filterEditPlace = DUMMY_PLACES.filter(eachPlace => eachPlace.creator === placeId);

    //DOES NOT WORK YET WITH MULTIPLE PLACE ID WITH SAME CREATOR
    useEffect(() => {
        filterEditPlace.map((t) => {
            setForm({
                'title': t.place, 
                'description': t.description, 
                'address': t.address
            });
        })
        console.log(form);

    }, [])
    
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

        const newErrors = {}

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

    const handleSubmit  = (e, t) => {
        e.preventDefault();

        const formErrors = validateForm();

        //If there are errors, then set the erros object
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            
            t.title = form.title;
            t.address = form.address;
            t.description = form.description;
            console.log(form)
        }
    }

    if(!filterEditPlace) {
        return(
            <div>
                <h1>Cannot find place!</h1>
            </div>
        )
    }
   
    //TRY AND MAKE MULTIPLE PLACE WITH SAME CREATOR
    //CANT SUBMIT EDIT BECAUSE WE HAVE NO BACKEND YET
    return(
        <div>
            {filterEditPlace.map((t) => {
                return(
                    <div key={t.id} className={classes.Form}>
                        <Forms>
                            <Forms.Group className={classes.Name} controlId="formBasicName">
                                <Forms.Label>Title</Forms.Label> <br />
                                <Forms.Control defaultValue={t.place} onChange={(e) => setField('title', e.target.value)} isInvalid={!!errors.title} name="title" required type="name" />
                            </Forms.Group>
                            <Forms.Control.Feedback type='invalid'>
                                {errors.title}
                            </Forms.Control.Feedback>
                            <Forms.Group className={classes.Description} controlId="formBasicDescription">
                                <Forms.Label>Description</Forms.Label> <br />
                                <Forms.Control defaultValue={t.description} onChange={(e) => setField('description', e.target.value)} isInvalid={!!errors.description} name="description" required as="textarea" type="description" rows={3} />
                            </Forms.Group>
                            <Forms.Control.Feedback type='invalid'>
                                {errors.description}
                            </Forms.Control.Feedback>
                            <Forms.Group className={classes.Password} controlId="formBasicAddress">
                                <Forms.Label>Address</Forms.Label> <br />
                                <Forms.Control defaultValue={t.address} onChange={(e) => setField('address', e.target.value)} isInvalid={!!errors.address} name="address" required type="address" />
                            </Forms.Group>
                            <Forms.Control.Feedback type='invalid'>
                                {errors.address}
                            </Forms.Control.Feedback>
                            <div className={classes.ButtonGroup}>
                                <Button onClick={(e) => handleSubmit(e, t)} className={classes.SignupButton} variant="primary" type="button">
                                    Confirm Edits
                                </Button>
                                <br />
                            </div>
                        </Forms>
                    </div>
                )
            })}
        </div>
    )
}

export default EditPlace;