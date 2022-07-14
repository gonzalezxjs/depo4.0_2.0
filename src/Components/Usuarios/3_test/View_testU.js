import React from "react";
import User from "../1_home dashboard/User";

const View_testU = () => {
  return (
    <div>
      <User></User>

      <div class="main">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>12/03/2022 12:08:47 PM</th>
              <th>
                <button className="btn btn-primary">Ver resultados</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View_testU;
