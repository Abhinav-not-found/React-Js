import React from 'react'

export default function SongItem({title,artist,duration}) {
  return (
    <div>
        <h2>Title: {title}</h2>
        <h3>Artist : {artist}</h3>
        <h3>Duration : {duration}</h3>
    </div>
  )
}
