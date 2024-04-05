import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './vistas/About'
import { Home } from './vistas/Home'
import { Header } from './componentes/Header'
import { GlobalContextProvider } from './context/GlobalContext'
import { Login } from './vistas/Login'

function App() {

  return (
    <GlobalContextProvider>

      <div className='bg-slate-300 h-svh'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

    </GlobalContextProvider>

  )
}

export default App
