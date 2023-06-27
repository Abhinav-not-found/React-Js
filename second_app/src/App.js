import React, { Component } from 'react'

import UserList from './Components/Assignment/Solution3/UserList'


const user=[
  {
    id:1,
    name:"John doe",
    email:"johndoe@email.com"
  },
  {
    id:2,
    name:"Jane smith",
    email:"janesmith@email.com",
  },
  {
    id:3,
    name:"Alice johnson",
    email:"alicjohnson@email.com"
  },
]
export default class App extends Component {

  render() {

    return (
      <div>
          <UserList user={user}> 
          </UserList>
      </div>
    )
  }
}
