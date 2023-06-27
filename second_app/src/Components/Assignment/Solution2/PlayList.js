import React from 'react'
import SongItem from './SongItem'
export default function PlayList({songs}) {
  // const displaySong =[]
    // for(let i=0;i<props.song.length;i++){
    //   const element =props.song[i]
    //   displaySong.push(
    //     <SongItem key={i} title={element.title} artist={element.artist} duration={element.duration}></SongItem>
    //   )
    // }
  return (
    <div>
    {songs.map(
      (song,i)=>(
        <SongItem key={i} title={song.title} artist={song.artist} duration={song.duration}></SongItem>
      )
    )}
    </div>
  )
}
