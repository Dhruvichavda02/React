
import './App.css'
import Header from './components/Header'
import LanguageToggle from './components/LanguageToggle'
import {LangProvider} from './context/LanguageContext'
function App() {
    return(
        <LangProvider>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
          <Header/>  
            <LanguageToggle/>
      </div>
      </LangProvider>
          )
}

export default App
