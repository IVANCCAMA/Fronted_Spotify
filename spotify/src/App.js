import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CrearLista from './components/crearLista';
import AñadirCancion from './components/añadirCancion';
import MenuLateral from './components/menuLateral';
import Registro from './components/registro';
import './App.css';
import Albumes from './components/albumes';
import ReproducirCancion from './components/reproducirCancion';
import Inicio from './components/inicioHome';
import ListaCanciones from './components/listaCanciones';
import { ListProvider } from './components/ListContext';
import PerfilUsuario from './components/perfilUsuario';
import Encabeazado from "./components/encabezado";
import CrearListaReproduccion from './components/listaReproduccion';
import IniciarSesion from "./components/iniciarsesion";
import ListaCancionesUser from './components/listaCancionesUser';
import Alerta from './components/alerta';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userConnected, setUserConnected] = useState(null);

  // alerta modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(false);
      setModalMessage("");
    }
  }, [isModalOpen]);
  const [redirectTo, setRedirectTo] = useState(null);

  // alerta default
  const alertDefault = { isOpen: false, mensaje: '', redirectTo: null };
  const [alertParameters, setAlertParameters] = useState(alertDefault);
  useEffect(() => {
    setAlertParameters(
      { isOpen: isModalOpen, mensaje: modalMessage, redirectTo: redirectTo }
    );
  }, [isModalOpen, modalMessage, redirectTo]);
  // reasignar al default al reload
  const location = useLocation();
  useEffect(() => {
    setIsModalOpen(false);
    setModalMessage("");
    setRedirectTo(null);
  }, [location.pathname]);

  const login = (user) => {
    setLoggedIn(true);
    setUserConnected(user);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserConnected(null);
  };

  return (
    <ListProvider>
      <div className="app-container">
        <Encabeazado loggedIn={loggedIn} signOff={logout} />
        <div className='container-super'>
          <MenuLateral
            islogin={loggedIn}
            userType={loggedIn ? userConnected.tipo_usuario : null}
            setIsModalOpen={setIsModalOpen}
            setModalMessage={setModalMessage}
            setRedirectTo={setRedirectTo}
          />
          <div className="content">
            <Alerta alertParameters={alertParameters} />

            <Routes>
              <Route path="/lista-canciones/:id_lista" element={<ListaCanciones />} />
              {loggedIn ? (
                <>
                  {userConnected.tipo_usuario === "Distribuidora musical" ? (
                    <>
                      <Route path="/" element={<Inicio />} />
                      <Route path="/Albumes" element={<Albumes />} />
                      <Route path="/crearAlbum" element={<CrearLista
                        setIsModalOpen={setIsModalOpen}
                        setModalMessage={setModalMessage}
                        setRedirectTo={setRedirectTo}
                      />} />
                      <Route path="/añadirCancion" element={<AñadirCancion
                        setIsModalOpen={setIsModalOpen}
                        setModalMessage={setModalMessage}
                        setRedirectTo={setRedirectTo}
                      />} />
                    </>
                  ) : (
                    <>
                      <Route path="/" element={<Albumes />} />
                      {/* <Route path="/crearListaReproduccion" element={<CrearListaReproduccion
                        setIsModalOpen={setIsModalOpen}
                        setModalMessage={setModalMessage}
                        setRedirectTo={setRedirectTo}
                         />} /> */}
                      <Route path="/perfil" element={< PerfilUsuario userConnected={userConnected} />} />
                      <Route path="/lista-canciones-user/:id_lista" element={<ListaCancionesUser />} />
                    </>
                  )}
                </>
              ) : (
                <>
                  <Route path="/" element={<Albumes />} />
                  <Route path="/iniciarsesion" element={< IniciarSesion signOn={login} />} />
                  <Route path="/registro" element={<Registro />} />
                </>
              )}
              <Route path="*" element={<Inicio to="/" />} />

            </Routes>
          </div>
        </div>
        <ReproducirCancion />
      </div>
    </ListProvider>
  );
}

export default App;
