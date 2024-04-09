import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Tiempo } from "../componentes/Tiempo"


export function Home() {

  const { ciudad, setCiudad } = useContext(GlobalContext)

  return (
    <div>
      <h1>Vista Home</h1>
      <Tiempo/>
    </div>
    
  )
}