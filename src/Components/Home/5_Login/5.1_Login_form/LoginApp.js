import React, { useState, useRef } from "react";
import "./LoginApp.css";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { UseLogin } from "../../../../hooks/Login/UseLogin";

const Login = ({ errors }) => {
  
  const { handleLogin, handleChange } = UseLogin();

  return (
    <div className="contenedor">
      <div className="login-box">
        <div className="title">
          <h1 className="Ini">Inicio de sesión</h1>
        </div>
        <form onSubmit={handleLogin} action="">
          <div className="user-box">
            <div className="indicadores">
              <p>Correo</p>
            </div>

            <input type="text" id="email" name="email" onChange={handleChange} />
            {errors && <div className="Error">{errors}</div>}
          </div>

          <div className="user-box">
            <div className="indicadores">
              <p>Contraseña</p>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              onChange={handleChange}
            />
            {errors && <div className="Error">{errors}</div>}
          </div>

          <a href="/recoverpass" className="resetpasswd">
            ¿Olvidaste la contraseña?
          </a>

          <div class="remind_me">
            <input type="checkbox" class="check" />
            <p class="check">Recuerdame</p>
          </div>

          <button type="submit" className="ingreso">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
