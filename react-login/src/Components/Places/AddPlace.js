import React, {useState} from "react";
import classes from './AddPlace.module.css';

import Button from 'react-bootstrap/Button';
import Forms from 'react-bootstrap/Form';

const AddPlace = () => {

    const [validated, setValidation] = useState(false);

    const checkValidation = (event) => {
        const form  = event.target;
        //FIX THIS VALIDATION
        if(form.validated === false) {
            console.log(form.validated)
            event.preventDefault();
        }
        else {
            setValidation(true);
        }
        
        
    }

    return(
        <div className={classes.Form}>
            <Forms noValidate validated={validated} onSubmit={checkValidation}>
                <Forms.Group className={classes.Name} controlId="formBasicName">
                    <Forms.Label>Title</Forms.Label> <br />
                    <Forms.Control required type="name" />
                </Forms.Group>
                <Forms.Group className={classes.Description} controlId="formBasicDescription">
                    <Forms.Label>Description</Forms.Label> <br />
                    <Forms.Control required as="textarea" type="description" rows={3} />
                </Forms.Group>
                <Forms.Group className={classes.Password} controlId="formBasicPassword">
                    <Forms.Label>Address</Forms.Label> <br />
                    <Forms.Control required type="Address" />
                </Forms.Group>
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