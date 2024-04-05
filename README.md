# Weather 
# React con router, estados, contexto global, useEffect, etc
## Creamos proyecto
- [x] Creamos proyecto
- [x] Instalamos Tailwind
- [] Creamos vistas Home, About, Login y Registro
## Router
- [x] Instalamos React Router
   - `npm install react-router-dom@6`
   - Importamos BrowserRouter en main.jsx
   - Envolvemos toda la aplicación con el componente
   - Definimos (en el componente App) las rutas con 'Routes`y `Route`
   - Usamos `Link`en el botón de login par navegar a Home
- [x] Creamos componente Header (común a todas las vistas)
- [x] Creamos componente Avatar con nombre de usuario e imagen y lo cargamos en header
## useContext
- [x] Creamos contexto global para toda la aplicación
    - Creamos componente `GlobalContext` con **createContext**
    - Creamos contexto `globalContext`y proveedor `GlobalContextProvider`
    - Envolvemos toda nuestra aplicación con el proveedor
    - Creamos estados, variables, etc en contexto y las importamos en el componente que las necesitemos (con **useContext**)
- [x] Usamos contexto para el componente Avatar
- [] Actualizamos vista Login para capturar datos de entrada
  - Capturamos datos en estado 
  - Detectamos submit y iniciamos sesión: 
    - actualizamos **user** de contexto global
    - navegamos (usando **useNavigate** de react-router-dom) a la página home

