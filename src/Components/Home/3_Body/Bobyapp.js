import React from "react";
import Deportista from "../../assets/img/Deportistas.png";
import "./bodyapp.css";

const Bobyapp = () => {
  return (
    <div className="yuca">
      <div>
        <div className="modificar">
          <div className="cont-text">
            <h3>ENTRENADORES</h3>

            <p>
              Impartimos formación con los mejores entrenadores, aplicamos y
              evaluamos a los deportistas con inteligencia y criterio. Hacemos
              que nuestros jugadores que caminan vuelen hacia el camino del
              éxito.Entrenas con los campeones.
            </p>
          </div>
          <div className="cont-img">
            <img
              className="img"
              src="https://e0.365dm.com/19/07/768x432/skysports-jose-mourinho-tactical-periodisation_4718677.jpg?20190715090146"
            />
          </div>
        </div>

        <div className="modificar">
          <div className="cont-text">
            <h3>PSICÓLOGO</h3>

            <p>
              Optimizamos el rendimiento de nuestros jugadores mediante las
              funciones de nuestros psicólogos que lo logran a través de
              evaluaciones e intervenciones a los deportistas o al equipo para
              tratar sus problemas emocionales que no los hacen alcanzar sus
              metas. Con disciplina y proyección vas a poder cumplir tu labor.
            </p>
          </div>

          <div className="cont-img">
            <img
              className="img"
              src="https://image.shutterstock.com/shutterstock/photos/1429399772/display_1500/stock-photo-active-lifestyle-and-mental-function-or-psychological-benefits-of-sport-and-exercise-as-a-group-of-1429399772.jpg"
            />
          </div>
        </div>

        <div className="modificar2">
          <div className="cont-text">
            <h3>DEPORTISTAS</h3>

            <p>
              <center>
                Profesionales con disciplina superando sus límites.
              </center>
            </p>
          </div>
          <div className="cont-img">
            <img className="img2" src={Deportista} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bobyapp;
