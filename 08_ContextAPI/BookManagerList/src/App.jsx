
import './App.css'
import BookForm from './component/BookForm'
import BookList from './component/BookList'
import FilterBar from './component/FilterBar'

function App() {

  return (
    <>
      <h1>📚 Book List Manager</h1>
      <BookForm/>
      <FilterBar/>
      <BookList/>
    </>
  )
}

export default App
