
import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (

    <>
    
    <CartProvider>
    <Navbar/>
    <ProductList/>
    <Cart/>
    </CartProvider>

  </>
  )
  }

export default App
