import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Contact.css";


const Contactos = () => {
  let navigate = useNavigate();
  return (
    <div className="body">
      <div className="content">
        <div className="contact-wrapper">
          <div className="contact-from">
            <h3>Contactar con servicio de ayuda</h3>
            <form action>
              <p>
                <label>Nombre</label>
                <input type="text" name="nombre" />
              </p>
              <p>
                <label>Correo electronico</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Phone</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>Asunto</label>
                <input type="text" name="asunto" />
              </p>
              <p className="block">
                <label>Message</label>
                <textarea name="message" rows={1} defaultValue={""} />
              </p>
             
            </form>
            <p className="buttom">
                <button
                  type="submit"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Enviar
                </button>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos
