import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Tiempo } from "../componentes/Tiempo"
import { supabase } from "../supabase/supabase"


export function Usuarios() {

  useEffect(() => {

    async function leerTodos() {

      let { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')


      setData(perfiles)
      //console.log('perfiles', perfiles);
    }
    leerTodos()



  }, [])

  const { ciudad, setCiudad } = useContext(GlobalContext)

  const [data, setData] = useState([])

  return (
    <div>
      <h1 className="text-3xl">Vista Usuarios</h1>

      <div className="flex gap-3">
        {
          data.map((usuario, key) => (
            <div key={key}>
              <div>{usuario?.nombre}</div>
              <div>{usuario?.apellidos}</div>
            </div>
          ))
        }
      </div>

    </div>

  )
}