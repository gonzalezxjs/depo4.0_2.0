import React from "react";
import "./Admin.css";
import LoginApp from "../../Home/5_Login/5.1_Login_form/LoginApp";

const AdminIndex = () => {

    console.log("El valor de la authe es", global.authen);

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
              <a href="/admin">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Panel de control</span>
              </a>
            </li>

            <li>
              <a href="/admin/test">
                <span className="icon">
                  <ion-icon name="document-text-outline"></ion-icon>
                </span>
                <span className="title">Test</span>
              </a>
            </li>

            <li>
              <a href="/create">
                <span className="icon">
                  <ion-icon name="people-circle-outline"></ion-icon>
                </span>
                <span className="title">Administrar cuentas</span>
              </a>
            </li>

            {/* <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">Configuración</span>
              </a>
            </li> */}

            <li>
              <a href="/admin/help">
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

export default AdminIndex;
