import { useContext,createContext } from "react";

export const LangContext = createContext()
export const useLang = ()=> useContext(LangContext)
