import React from 'react'
import { useLang } from '../context/useLang'

function LanguageToggle() {
    const {toggleLanguage,traslatedText}=useLang()
  return (
    <div>
          <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={toggleLanguage}
    >
      {traslatedText.toggle}
    </button>
    </div>
  )
}

export default LanguageToggle