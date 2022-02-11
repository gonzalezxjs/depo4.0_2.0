import React from "react";
import "./FooterApp.css";
import logo from "../../assets/img/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";

const FooterApp = () => {
  return (
    <div>

      <footer className="footer">
        
        <div className="custom-shape-divider-bottom-1637393315">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>

        <div className="container_footer">

          <div className="box_footer">
            <div className="logo">
              {" "}
              <img src={logo} />
            </div>

            <div className="terms">
              <p>
                La transformación digital también está marcando el hito
                deportivo
              </p>
            </div>
          </div>

          <div className="box_footer">
            <h2> Nos puedes contactar</h2>
            <a href="https://api.whatsapp.com/send?phone=+573162866552" className="iconos">
              <FaPhoneAlt /> +57 3162866552
            </a>
            <br />
            <a
              href="https://www.google.com/intl/es/gmail/about/"
              className="iconos"
            >
  
              <FaEnvelope /> {" "}
               eacabal@misena.edu.co
            </a>
            <br />
            <a href="https://cutt.ly/oTSazCH" className="iconos">
              {" "}
              <MdLocationPin /> Calle 40 #30-44 Palmira, Colombia{" "}
            </a>
          </div>

          <div className="box_footer">
            <h2>Nos puedes encontrar</h2>
            <a
              href="https://www.facebook.com/search/top/?q=centro%20de%20biotecnolog%C3%ADa%20industrial%20cbi"
              className="iconos"
            >
              <GrFacebook /> Facebook{" "}
            </a>
            <br />
            <a
              href="https://www.instagram.com/senacomunica/"
              className="iconos"
            >
              {" "}
              <GrInstagram /> Intagram{" "}
            </a>
            <br />
            <a href="https://www.youtube.com/user/SENATV" className="iconos">
              {" "}
              <GrYoutube /> Youtube{" "}
            </a>
          </div>

          <div className="box_copyright">
            <p>
              Copyright © 2021 | <b>Deportes 4.0</b> | Todos los derechos reservados
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default FooterApp;
