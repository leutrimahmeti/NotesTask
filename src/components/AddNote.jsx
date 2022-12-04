import React from 'react'
import { useState } from 'react'

const AddNote = ({handleAddNewNote}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState('')
 
const handleCategoryChange = e => {
  setCategory(e.target.value)
}
 
const handleChange = e =>{
  setName(e.target.value)
}

const handleSubmit = () => {
  handleAddNewNote(name,category)
}
  return (
    <div className='notecard d-flex p-2 bg-primary mb-4 w-50 mt-4'>
        <textarea onChange={handleChange} rows='1' placeholder='Name' className='me-5'></textarea>
        <select onChange={handleCategoryChange} >
            <option value="">Choose Category</option>
            <option value="urgent">Urgent</option>
            <option value="noturgent">Not Urgent</option>
        </select>
        <div className='d-flex justify-content-end flex-grow-1'>
        <button className='btn btn-success' onClick={handleSubmit}>
            Save
        </button>
        </div>
    </div>
  )
}

export default AddNote