import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CrearLista from './components/crearLista';
import AñadirCancion from './components/añadirCancion';
import MenuLateral from './components/menuLateral';
import ListaAlbumes from './components/listaAlbunes';
import './App.css'

function App () {
  return (
    <div className='boby'> 
       <div className='flex'>
        <MenuLateral/>
          <div className="container mx-auto py-4 px-20">
            <Routes>
              <Route path="/crearAlbum" element={< CrearLista />} />
            </Routes>
            <Routes>
              <Route path="/añadirCancion" element={< AñadirCancion />} />
            </Routes>
            <Routes>
              <Route path="/Albumes" element={< ListaAlbumes />} />
            </Routes>
          </div>
       </div>
    </div>
  );
};

export default App;
