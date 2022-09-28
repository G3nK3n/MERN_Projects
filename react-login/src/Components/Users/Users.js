import React from "react";
import UsersList from './UsersList';


// This component will return the UserList component.  
const Users = () => {
    
    //Dummy users for now
    const DUMMY_USERS=[
        {
            id: 'u1',
            name: 'Ken'
        }, 
        {
            id: 'u2',
            name: 'Kev'
        }
    ];

    return(
        <UsersList items={DUMMY_USERS}/>
    )
}

export default Users;