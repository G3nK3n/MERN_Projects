import React from "react";
import UsersList from './UsersList';

const Users = () => {
    
    //Dummy users for now
    const DUMMY_USERS=[
        {
            id: '1',
            name: 'Ken'
        }
    ];

    return(
        <UsersList items={DUMMY_USERS}/>
    )
}

export default Users;