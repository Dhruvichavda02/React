import React, { useState } from 'react'
import { useBookContext } from '../context/BookContext';

function BookForm() {
    const [title,settitle] = useState('');
    const [author,setauthor] = useState('')
    const {addBook} =useBookContext()
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(!title || !author) return
      addBook({title,author})
      settitle('')
      setauthor('')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Title'  value={title} onChange={(e)=>settitle(e.target.value)}/>
        <input type="text" placeholder='Author'  value={author} onChange={(e)=>setauthor(e.target.value)}/>
        <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default BookForm