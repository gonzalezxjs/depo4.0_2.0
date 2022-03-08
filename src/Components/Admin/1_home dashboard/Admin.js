import React from "react";
import "./Admin.css";

const AdminIndex = () => {
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
              <a href="/">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Panel de control</span>
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
              <a href="/account!=create">
                <span className="icon">
                  <ion-icon name="people-circle-outline"></ion-icon>
                </span>
                <span className="title">Administrar cuentas</span>
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

        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="grid-outline"></ion-icon>
            </div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-circle-outline"></ion-icon>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
