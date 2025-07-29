
import { createContext,useState, useContext } from "react";

const bookContext = createContext()

export const BookProvider = ({children})=>{
    const [books,setBooks] = useState([])
    const [filter,setFilter ] = useState("ALL")

    const addBook = (book)=>{
        setBooks(prev=>[...prev,{...book,id:Date.now(),read:false}])
    }

    const deleteBook = (id)=>{
        setBooks((prev)=>prev.filter((prevbook)=>prevbook.id!== id))
    }

    const toggleRead = (id)=>{
        setBooks((prev)=>prev.map(book=> book.id===id ? {...book,read: !book.read} : book ))
    }

    const resetList=()=>{
        setBooks([])
    }
    return (
        <bookContext.Provider value={{books,filter,addBook,deleteBook,toggleRead,resetList,setFilter}}>
            {children}
        </bookContext.Provider>
    )
}

export const useBookContext =()=> useContext(bookContext)