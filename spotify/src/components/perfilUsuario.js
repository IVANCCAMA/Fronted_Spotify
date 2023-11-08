import React from "react";
import { Icon } from '@iconify/react';
import './perfilUsuario.css';
import { Link } from "react-router-dom";

function PerfilUsuario() {
    return (
        <div className="contendor-perfil-usuario">
            <div className="user-profile-container">
                <div className="user-profile-column">
                    <Icon icon="gg:profile" color="white" width="100px" height="100px" />
                </div>
                <div className="user-info-row">
                    <div>PERFIL</div>
                    <div className="user-profile-alias">
                        <div className="contenedor-alias">Alias del oyente</div>
                        <button className= "contenedor-editar">
                            <Icon icon="material-symbols:edit-outline" color="white" width={16} height={16} />
                            <div>Editar</div>
                        </button>
                    </div>
                    <div>n listas de reproducción</div>
                </div>
            </div>
            <div className="contenedor-listas-user">
                <div className="contenedor-listas-user-1">
                    <div>Listas de reproducciones</div>
                    <Link to = "/" className="mostrar-todo" >Mostar todo</Link>
                </div>
                <div className="listas-usuer">
                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>

                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>

                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>

                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>

                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>

                    <div className="lista-reproduccion">
                        {/* {albumes.map((album, index) => (
                            <Link to={`/lista-canciones/${album.id_lista}`} key={album.id_lista} className="lista-item"> */}
                            <img
                                src={"album.path_image"}
                                alt="Álbum"
                                className="lista-image"
                            />
                            <div className="lista-details">
                                <div className="lista-title">{"album.titulo_lista"}</div>
                                <div className="user-name">{"album.nombre_usuario"}</div>
                                <div className="lista-songs">{"album.cantidad_canciones"} canciones</div>
                            </div>
                        {/*  </Link>
                        ))} */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PerfilUsuario;