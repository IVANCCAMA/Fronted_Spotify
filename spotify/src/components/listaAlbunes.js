import React from "react";
import { Link } from "react-router-dom";
import './listaAlbunes.css'; // Asegúrate de importar tus estilos CSS
import groupLogo from '../logos/group.png'; // Ruta de tu imagen de álbum

function ListaAlbumes() {
  const albums = [
    { id: 1, artist: "Nombre del Artista 1" },
    { id: 2, artist: "Nombre del Artista 2" },
    { id: 3, artist: "Nombre del Artista 3" },
    { id: 4, artist: "Nombre del Artista 4" },
    { id: 5, artist: "Nombre del Artista 5" },
    { id: 6, artist: "Nombre del Artista 6" },
    { id: 7, artist: "Nombre del Artista 7" },
    { id: 8, artist: "Nombre del Artista 8" },
    { id: 9, artist: "Nombre del Artista 9" }
  ];

  return (
    <div className="album-list">
      {albums.map((album, index) => (
        <Link to={`/detalle-album/${album.id}`} key={album.id} className="album-item">
          <img src={groupLogo} alt="Álbum" className="album-logo" />
          <div className="album-details">
            <div className="album-title">Album {index + 1}</div>
            <div className="artist-name">{album.artist}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListaAlbumes;

