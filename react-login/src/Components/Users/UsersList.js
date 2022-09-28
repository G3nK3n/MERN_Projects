
import React from "react";
import UsersItem from './UsersItem';

//This class shows the list of Users
const UsersList = props => {
    // This checks if there are any users in the array, hence the length
    if(props.items.length === 0) {
        return(
            <div>
                <h1>No Users found!</h1>
            </div>
        )
    }

    // This returns all users in the array
    return (
        <div>
            <ul>
                {props.items.map(eachUser => {
                    return <UsersItem key={eachUser.id} id={eachUser.id} name={eachUser.name}/> 
                })}
            </ul>
        </div>
    )

}

export default UsersList;