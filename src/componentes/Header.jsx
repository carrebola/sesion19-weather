import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase";

export function Header() {

  function controladorLogout() {

    async function verUsuarioLogueado() {

      const { data: { user } } = await supabase.auth.getUser()
      console.log('usuario logueado :', user);
    }
    verUsuarioLogueado()

    async function logout() {

      let { error } = await supabase.auth.signOut()
      verUsuarioLogueado()
    }
    logout()

    console.log();
    setUsuario({})
    navigate('/login')
  }

  const navigate = useNavigate()
  const { usuario, setUsuario } = useContext(GlobalContext)

  return (
    <div className="flex justify-between p-3 bg-slate-100 shadow items-center">
      <div>Weather</div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <button onClick={controladorLogout}>Logout</button>
          </li>
        </ul>
      </div>
      <Avatar usuario={usuario}></Avatar>
    </div>
  )
}