import React, { Children, useState } from "react"
import { LangContext } from "./useLang"
// 1. creating context
// in useLang

const translations= {
    en :{
        greeting : "Hello Welcome to Master Mind space! ",
        toggle : "Wanna switch to Hindi ?"
    },
     hi: {
    greeting: "नमस्ते! हमारी साइट पर आपका स्वागत है।",
    toggle: "अंग्रेजी में बदलें",
  }
}

// 2. Provider
export  const LangProvider = ({children}) =>{

    const [lang,setLang] = useState("en")
    const toggleLanguage = ()=>{
        setLang((prev)=>prev==="en"?"hi":"en")
    }
    const traslatedText = translations[lang]
    return (
        <LangContext.Provider value={{ toggleLanguage,traslatedText,lang }}>
                {children}
        </LangContext.Provider>
    )
}

//3.useContext  // in useLang.js

