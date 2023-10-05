import React, { useEffect, useState } from 'react';
import { Link,Routes, Route } from "react-router-dom";
import './listaAlbunes.css';
import axios from "axios";
import ListaCanciones from './listaCanciones';


function ListaAlbumes() {

  const [albumes, setAlbumes] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://spfisbackend-production.up.railway.app/api/lista_canciones/');
      const listaCanciones = response.data;
      setAlbumes(listaCanciones);
    } catch (error) {
      console.error('Error al obtener la lista de canciones:', error);
    }
  };

    fetchData();
  }, []);


return (
  <div className="album-list">
    {albumes.map((album, index) => (
      <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="album-item">
        <img
          src={album.path_image}
          alt="Álbum"
          className="album-image" // Clase album-image para la imagen
        />
        <div className="album-details">
          <div className="album-title">{album.titulo_lista}</div>
          <div className="artist-name">{album.nombre_usuario}</div>
          <div className="album-songs">{album.cantidad_canciones} canciones</div>
        </div>
      </Link>
    ))}
  </div>
);


}

export default ListaAlbumes;
