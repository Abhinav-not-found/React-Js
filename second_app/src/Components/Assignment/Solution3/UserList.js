import React from 'react'
import UserItem from './UserItem'
export default function UserList({user}) {
  return (
    <div>
        <h1>User list: </h1>
        {user.map(
      (user)=>(
        <UserItem key={user.id} id={user.id} name={user.name} email={user.email}>
        
        </UserItem>
      )
    )}
    </div>
  )
}
