
import { createContext, useState } from "react";

// Creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()

// Creamos el proveedor del contexto

export function GlobalContextProvider({ children }) {

  const colorFondo = 'bg-slate-100'

  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  })

  return (
    <GlobalContext.Provider value={{
      usuario, setUsuario
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

