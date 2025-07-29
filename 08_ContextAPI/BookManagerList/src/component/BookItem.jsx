import React from 'react'
import { useBookContext } from '../context/BookContext'

function BookItem({book}) {
    const {deleteBook,toggleRead}= useBookContext()
  return (
    <div>
        <span><strong>{book.title}</strong>by Author {book.author}</span>
        <button onClick={()=>toggleRead(book.id)}>
            {book.read ? "Mark unread" : "Mark Read"}
        </button>
        <button onClick={()=>deleteBook(book.id)}> Delete</button>
    </div>
  )
}

export default BookItem