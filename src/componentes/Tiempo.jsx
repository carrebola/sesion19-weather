import { GlobalContext } from "../context/GlobalContext"
import { useContext, useEffect } from "react"

export function Tiempo() {

  const { ciudad, setCiudad, latitud, setLatitud, longitud } = useContext(GlobalContext)

  useEffect(()=>{

    // const latitud = await fetch(url)

    setCiudad('Sant Adria')
    setLatitud(lat)
  }, [])

  return (
    <div className="m-5">
      <div>Ciudad: {ciudad}</div>
      <div>latitud: {latitud}</div>
      <div>logitud: {longitud}</div>
    </div>
  )
}