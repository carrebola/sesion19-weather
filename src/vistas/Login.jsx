import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { usersData } from "../data/usersData"
import { supabase } from "../supabase/supabase"

export function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { usuario, setUsuario } = useContext(GlobalContext)
  // const {  } = useContext(GlobalContext)

  function controladorEmail(e) {
    setEmail(e.target.value)
    // console.log(email);
  }
  function controladorPassword(e) {
    setPassword(e.target.value)
    //console.log(password);
  }

  function controladorSubmit(e) {
    e.preventDefault()
    // Busco el index del elemento de la bd (array usersData) que coincida con el usuario introducido en el input 
    const index = usersData.findIndex((item) => item.email == email)
    //console.log('index : ', index);

    async function inicioSesion() {
      try {
        let { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })
        if (error) console.log('Error al iniciar sesion', error.message);
        setUsuario({
          email: data.user.email,
        })
        console.log('data de login: ', data);
      } catch (error) {
        console.log('Error en login', error);
      }
    }
    inicioSesion()


    // if(usersData[index]?.password == password){
    //   console.log('hola ', usersData[index]);
    //   const usuarioLogueado = {
    //     email: usersData[index].email,
    //     imagen: usersData[index].imagen
    //   }
    //   setUsuario(usuarioLogueado)
    //   // navegamos a la vista home
    //   navigate('/')

    // }else{
    //   alert('Error en el inicio de sesión')
    // }
  }
  return (
    <div className="">
      <h1>Inicio de sesión</h1>
      <form onSubmit={(e) => controladorSubmit(e)} className="w-[400px] border mx-auto mt-10 p-5 bg-slate-200 shadow ">
        <input
          onChange={(e) => {
            controladorEmail(e)
          }}
          value={email}
          type="text" className="p-2 w-full" placeholder="email@email.com" />
        <input
          onChange={(e) => {
            controladorPassword(e)
          }}
          type="password" className="mt-3 p-2 w-full" value={password} />
        <button className="w-full border mt-3 bg-green-400 p-3" >Iniciar sesión</button>
      </form>
    </div>

  )
}