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
            <form action="https://formsubmit.co/445b95f5af24943b73b0d3ba0ed68325" method='POST'>
            
                <label>Nombre</label>
                <input type="text" name="name" />
              
              
                <label>Correo electronico</label>
                <input type="email" name="email" />
              
              
                <label>Phone</label>
                <input type="tel" name="phone" />
              
              
                <label>Asunto</label>
                <input type="text" name="subject" />
              
            
                <label>Message</label>
                <input type="text" name="comments"  />
              

                <button type="submit">Send</button>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="http://127.0.0.1:3000/admin/"></input>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos
