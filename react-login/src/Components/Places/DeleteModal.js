import React from "react";
import Button from 'react-bootstrap/Button';

import classes from './DeleteModal.module.css';

const DeleteModal = (props) => {
    return(
        <div>
            <div className={classes.DeleteModal}>
                <p>Are you sure you want to delete?</p>
                <Button onClick={props.clickConfirmDelete} className={classes.Confirm}>CONFIRM</Button>
                <Button onClick={props.clickCancel} className={classes.Cancel}>CANCEL</Button>
            </div>
        </div>
    )

}

export default DeleteModal;