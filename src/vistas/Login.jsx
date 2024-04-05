import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useState } from "react"

import { usersData } from "../data/usersData"
export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {user, setUser} = useContext(GlobalContext)
  // const {  } = useContext(GlobalContext)

  function controladorEmail(e) {
    setEmail(e.target.value)
    console.log(email);
  }
  function controladorPassword(e) {
    setPassword(e.target.value)
    console.log(password);
  }
  function controladorSubmit(e) {
    e.preventDefault()
    console.log('submit');
    const index = usersData.findIndex((item)=> item.email == email)
    console.log('index : ', index );
    if(usersData[index].password == password){
      console.log('hola ', usersData[index].email);

      setUser(usersData[index])

    }else{
      alert('Error en el inicio de sesión')
    }
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
        <button className="w-full border mt-3 bg-green-400 p-3">Iniciar sesión</button>
      </form>
    </div>

  )
}