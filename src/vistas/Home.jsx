import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


export function Home() {

  const { colorFondo } = useContext(GlobalContext)

  return (
    <div>
      <h1>Vista Home</h1>
      {colorFondo}
    </div>
    
  )
}