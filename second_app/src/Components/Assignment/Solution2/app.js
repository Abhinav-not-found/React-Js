import React, { Component } from 'react'
import PlayList from './Components/Solution2/PlayList'
const songs=[
  {
    title:"Song 1",
    artist:"artist 1",
    duration:"3:45"
  },
  {
    title:"Song 2",
    artist:"artist 2",
    duration:"4:20"
  },
  {
    title:"Song 3",
    artist:"artist 3",
    duration:"2:55"
  },
]
export default class App extends Component {

  render() {

    return (
      <div>
           <PlayList songs ={songs}></PlayList>
      </div>
    )
  }
}
