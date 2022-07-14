import React from "react";
import Admin from "../1_home dashboard/Admin";

const View_test = () => {
  return (
    <div>
      <Admin></Admin>

      <div class="main">

      <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Identificación</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Juan David P.</th>
              <th>1006403950</th>
              <th>12/03/2022 12:08:47 PM</th>
              <th>
                <button className="btn btn-primary">Ver resultados</button>
                <button className="btn btn-danger">Eliminar</button>
              </th>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default View_test;
