import React, { useState, useRef } from "react";
import "./LoginApp.css";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const URL_LOGIN = "http://localhost:8080/depo/ginlo/login.php";

  const enviarData = async (url, datos) => {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await resp.json();
    //console.log(json)

    return json;
  };

  let navigate = useNavigate();
  global.authen = false;
  const handleLogin = async () => {
    const datos = {
      correo_usu: refCorreo.current.value,
      contrasena_usu: refContraseña.current.value,
    };
    const respuestaJson = await enviarData(URL_LOGIN, datos);
    console.log("respuesta desde el evento", respuestaJson);
    const conectado = respuestaJson.conectado;
    const id_rol = respuestaJson.id_rol;
    const error_password = respuestaJson.error;

    if (
      conectado == false &&
      error_password == "La clave es incorrecta, vuelva a intentarlo."
    ) {
      alert("Datos incorrectos, vuelva a intentarlo");
    }

    if (conectado == false && error_password == "El usuario no existe.") {
      alert("El usuario no existe");
    }

    if ((conectado === true) & (id_rol == "1")) {
      navigate("/admin");
    global.authen = true;
    console.log("El valor de authen es " , global.authen);

    } else if ((conectado === true) & (id_rol == "3 ")) {
      navigate("/user");
    } else {
      console.log("Error");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const refCorreo = useRef(null);

  const refContraseña = useRef(null);

  
  


  return (
    <div className="contenedor">
      <div className="login-box">
        <div className="title">
          <h1 className="Ini">Inicio de sesión</h1>
        </div>

        <Formik
          initialValues={{
            correo: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};

            //Correo
            if (!valores.correo) {
              errores.correo = "Por favor, ingrese el correo";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo = "Ingrese un correo válido";
            }

            //Contraseña
            if (!valores.password) {
              errores.password = "Por favor, ingrese la contraseña";
            }

            return errores;
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={onSubmit} action="">
              <div className="user-box">
                <div className="indicadores">
                  <p>Correo</p>
                </div>

                <input
                  type="text"
                  id="correo"
                  name="correo"
                  placeholder=""
                  ref={refCorreo}
                />
                {errors.correo && <div className="Error">{errors.correo}</div>}
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
                  ref={refContraseña}
                />
                {errors.password && (
                  <div className="Error">{errors.password}</div>
                )}
              </div>

              <a href="/recoverpass" className="resetpasswd">
                ¿Olvidaste la contraseña?
              </a>

              <div class="remind_me">
                <input type="checkbox" class="check" />
                <p class="check">Recuerdame</p>
              </div>

              <button type="submit" className="ingreso" onClick={handleLogin}>
                login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
