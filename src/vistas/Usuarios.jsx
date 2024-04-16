import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Tiempo } from "../componentes/Tiempo"


export function Usuarios() {

  const { ciudad, setCiudad } = useContext(GlobalContext)

  return (
    <div>
      <h1 className="text-3xl">Vista Usuarios</h1>
      {/* <Tiempo/> */}
    </div>
    
  )
}