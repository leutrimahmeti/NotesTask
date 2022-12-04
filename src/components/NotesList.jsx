import React from 'react'
import NoteCard from './NoteCard'
const NotesList = ({data,handleDeleteNote}) => {
  return (
    <>
      {
        data.map((item,index) => (
          <NoteCard key={index} item={item} handleDeleteNote={handleDeleteNote} />
        ))
      }
    </>
  )
}

export default NotesList