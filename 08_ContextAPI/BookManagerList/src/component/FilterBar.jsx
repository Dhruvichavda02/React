import React from 'react'
import { useBookContext } from '../context/BookContext'

function FilterBar() {
    const {filter,setFilter,resetList} = useBookContext()
  return (
    <div>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("Read")}>Read</button>
        <button onClick={()=>setFilter("Unread")}>Unread</button>
        <button onClick={resetList}>Reset List</button>
    </div>
  )
}

export default FilterBar