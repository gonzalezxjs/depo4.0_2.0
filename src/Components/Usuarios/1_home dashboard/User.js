import React from "react";
import "./User.css";

const UserIndex = () => {
  return (
    <div>
      <div classnam="conteiner">
        <div className="navigation">
          <ul>
            <li>
              <a href="/">
                <span className="icon">
                  <ion-icon name="accessibility-outline"></ion-icon>
                </span>
                <span className="title">Deportes 4.0</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Inicio</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span className="icon">
                  <ion-icon name="document-text-outline"></ion-icon>
                </span>
                <span className="title">Test</span>
              </a>
            </li>


            <li>
              <a href="/">
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">Configuración</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span className="icon">
                  <ion-icon name="help-circle-outline"></ion-icon>
                </span>
                <span className="title">Ayuda</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span className="icon">
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
                <span className="title">Cerrar sesión</span>
              </a>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default UserIndex;
