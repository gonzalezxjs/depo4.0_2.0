import React, { useState } from "react";
import "./RecoverPass.css";
import { Formik } from "formik";


const RecoverPass_form = () => {
  return (
    <div className="contenedor">
      <div className="recover-box">
        <div className="title">
          <h1 className="Ini">Recuperar contraseña</h1>
        </div>

        <Formik
          initialValues={{
            correo: ""
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

            return errores;
          }}
          onSubmit={(valores) => {
            console.log("Formulario Enviado");
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <div className="user-box-recover">
                <div className="indicadores">
                  <p>Por favor, ingrese su correo para enviar las instruccciones de restablececimiento de su contraseña.</p>
                </div>

                <input
                  type="text"
                  id="correo"
                  name="correo"
                  placeholder="Correo"
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.correo && <div className="Error">{errors.correo}</div>}
              </div>


              <button type="submit" className="send">
                Enviar
              </button>

            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RecoverPass_form