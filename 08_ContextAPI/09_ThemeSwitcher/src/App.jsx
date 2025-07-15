
import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App(){
  const [themeMode,setThemeMode] = useState("light")

  // Here take the same name as you gave in theme.js . Aa lighTheme and DarkTheme theme.js ni ander inject thai jase
  const lightTheme= ()=>{
    setThemeMode("light")
  }

  const DarkTheme= ()=>{
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
    
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  
  }, [themeMode])
  
  return(
   <ThemeProvider value={{themeMode, lightTheme, DarkTheme}}>
         <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
         </div>
    </ThemeProvider>
  )
}
export default App
