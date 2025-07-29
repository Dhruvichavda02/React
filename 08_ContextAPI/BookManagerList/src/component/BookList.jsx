import React from 'react'
import { useBookContext } from '../context/BookContext'
import BookItem from './BookItem';

function BookList() {
    const {filter,books}=useBookContext()

    const filteredbooks = books.filter(book=>{
        if(filter ==="Read") return book.read;
        if(filter === "Unread") return !book.read
        return true
    })
  return (
    <div>
            {filteredbooks.map(book=>
                <BookItem key={book.id} book={book}/>
            )}
    </div>
  )
}

export default BookList