import {useState, useContext, createContext} from 'react'

const LanguageContext = createContext();

const useLanguage = () => useContext(LanguageContext);
export default useLanguage;

export const languages = [
  {name: "kr", label: "한국어", id:0},
  {name: "es", label: "Español", id:1},
  {name: "en", label: "Engilsh", id:2},
]

export function LanguageProvider ({ children }) {
  const [language, setLanguage] = useState(languages[0])
  const handleLanguage = (langId) => {
    setLanguage(languages[langId])
  }
  const props = {value:{language, handleLanguage}}
  return (
    <LanguageContext.Provider {...props}>
      {children}
    </LanguageContext.Provider>
  )
}