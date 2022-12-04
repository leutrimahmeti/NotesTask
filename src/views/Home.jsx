import React, { useState } from 'react'
import NotesList from '../components/NotesList'
import notes from '../assets/data/notes'
import AddNote from '../components/AddNote'
const Home = () => {
    const [filterNotes, setFilterNotes] = useState(notes)
    const [add, setAdd] = useState(false)
    const handleSearch = e => {
        const searchValue = e.target.value
        const searchedNotes = notes.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilterNotes(searchedNotes)
    }

    const handleFilter = e => {
        const filterValue=e.target.value
        if(filterValue==='default'){
            setFilterNotes(notes)
        }
        else{
            const filteredNotes = notes.filter(item => item.category === filterValue)

            setFilterNotes(filteredNotes)
        }
    }

    const addNewNote=(name,category)=>{
        const date = new Date().toLocaleDateString();
        const Note = {
            id:(Math.random()*100),
            name:name,
            date:date,
            category:category
        }
        const updatedNotes = [...filterNotes,Note]
        setFilterNotes(updatedNotes)
    }
    const deleteNote=(id)=>{
        const updatedNotes = filterNotes.filter(item => item.id !== id)
        setFilterNotes(updatedNotes)
    }

  return (
        <div className='container'>
            <div className='row'>
            <div className='mt-5'>
                <input type="text" id='search' placeholder='Search...' className='form-control w-25' onChange={handleSearch}/>
                    <select onChange={handleFilter} className='mt-3'>
                        <option value="default">Filter By Category</option>
                        <option value="urgent">Urgent</option>
                        <option value="noturgent">Not Urgent</option>
                    </select>
            </div>
            <div className='mt-5'>
                <button className="btn btn-primary" onClick={() => setAdd(!add)}>Add New Note</button>
            </div>
            
                <div className="col-sm mt-3">
                    {add? 
                        <div><AddNote handleAddNewNote={addNewNote} /></div>
                       :
                       <div></div>
                       }
                    <NotesList data={filterNotes} handleDeleteNote={deleteNote} />
                </div>
            </div>
        </div>
  )
}

export default Home