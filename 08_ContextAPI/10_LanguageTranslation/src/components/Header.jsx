import React from 'react'
import { useLang } from '../context/useLang';



function Header() {
    const {traslatedText} = useLang();
  return (
    
    <h1 className="text-2xl font-bold mb-4"> {traslatedText.greeting}</h1>
  )
}

export default Header