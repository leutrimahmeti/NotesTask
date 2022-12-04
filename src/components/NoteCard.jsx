import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
const NoteCard = ({item,handleDeleteNote}) => {
  const handleDelete = () => {
    handleDeleteNote(item.id)
  }

  return (
    <div className='notecard d-flex p-2 bg-primary mb-4 w-50 mt-4'>
        <span className='p-1'>{item.name}</span>
        <div className='d-flex justify-content-end flex-grow-1'>
        <span className=''>{item.date}</span>
        <AiFillDelete size='1.5rem' className='p-1' style={{ cursor:'pointer'}}  onClick={handleDelete}/> 
        </div>
    </div>
  )
}

export default NoteCard