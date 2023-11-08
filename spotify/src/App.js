import { Routes, Route } from 'react-router-dom';
import CrearLista from './components/crearLista';
import AñadirCancion from './components/añadirCancion';
import MenuLateral from './components/menuLateral';
import Registro from './components/registro';
import './App.css';
import ListaAlbumes from './components/listaAlbunes';
import ReproducirCancion from './components/reproducirCancion';
import Inicio from './components/inicioHome';
import ListaCanciones from './components/listaCanciones';
import { ListProvider } from './components/ListContext';
import PerfilUsuario from './components/perfilUsuario';
import Encabeazado from "./components/encabezado";
import IniciarSesion from "./components/iniciarsesion";

function App() {
  return (
    <ListProvider>
      <div className="app-container">
        <div className='container-super'>
          <MenuLateral />
          <div className='contenedor-header-pincipal'>
            <Encabeazado /> 
            <div className="content">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Albumes" element={<ListaAlbumes />} />
                <Route path="/crearAlbum" element={<CrearLista />} />
                <Route path="/añadirCancion" element={<AñadirCancion />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/perfil" element={< PerfilUsuario />} />
                <Route path="/lista-canciones/:id_lista" element={<ListaCanciones />} />
                <Route path="/iniciarsesion" element={< IniciarSesion/>} />
              </Routes>
            </div>
          </div>
          
          
        </div>
        <ReproducirCancion />
      </div>
    </ListProvider>
  );
}


export default App;
