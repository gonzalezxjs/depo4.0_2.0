import "./Error404.css";
import NavBarApp from "../1_NavBarApp/NavBarApp";
import { React } from "react";
import FooterApp from "../4_Footer/FooterApp";
import image404 from "../../assets/img/errores.png";

const Error404 = () => {
  return (
    <div class="error">
      <NavBarApp />
      <div class="big_square">
        <div class="medium_square">
            <div class="conte-error">
                <div class="error404">
                    <img src={image404}></img>
                    <h1>404</h1>
                    <p>Página no encontrada</p>
                    <small>La página a la intentas acceder no existe</small>
                </div>
                <a href="/"><button>Ir al inicio</button></a>
            </div>
        </div>
      </div>
      <FooterApp />
    </div>
  );
};

export default Error404;