
import { createContext, useState } from "react";

// Creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()

// Creamos el proveedor del contexto

export function GlobalContextProvider({ children }) {

  const [usuario, setUsuario] = useState({
    email: 'default',
    password: '',
    imagen: 'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
  })

  const [ciudad, setCiudad] = useState('Badalona')
  const [latitud, setLatitud] = useState('0')
  const [longitud, setLongitud] = useState('0')

  return (
    <GlobalContext.Provider value={{
      usuario, setUsuario,
      ciudad, setCiudad,
      latitud, setLatitud,
      longitud, setLongitud
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

