import React from 'react'
import User from './User'


function Users(props){ 
    const usersList = props.users.map( user => <User key={user.id} user={user} />)
    
    return <>{usersList}</>
}

export default Users