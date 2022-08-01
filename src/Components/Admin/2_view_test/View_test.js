import { React, useState, useEffect } from "react";
import Admin from "../1_home dashboard/Admin";
import "./View_test.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function View_test() {
  const baseUrl = "http://127.0.0.1:8080/depo/index2.php";
  const [modalVer, setModalVer] = useState(false);

  //  Datos
  const [dataTest, setDataTest] = useState({
    id_prueba: "",
    num_docu: "",
    nom1_usu: "",
    nom2_usu: "",
    ape1_usu: "",
    ape2_usu: "",
    fecha_prueba: "",

    titere1: "",
    gesto1: "",
    pase_secuencia1: "",
    pase_desempeno1: "",
    gol1: "",
    rebote1: "",
    control_secuencia1: "",
    control_desempeno1: "",
    informo1: "",
    f_c_parcial1: "",

    titere2: "",
    gesto2: "",
    pase_secuencia2: "",
    pase_desempeno2: "",
    gol2: "",
    rebote2: "",
    control_secuencia2: "",
    control_desempeno2: "",
    informo2: "",
    f_c_parcial2: "",
    titere3: "",
    gesto3: "",
    pase_secuencia3: "",
    pase_desempeno3: "",
    gol3: "",
    rebote3: "",
    control_secuencia3: "",
    control_desempeno3: "",
    informo3: "",
    f_c_parcial3: "",

    titere4: "",
    gesto4: "",
    pase_secuencia4: "",
    pase_desempeno4: "",
    gol4: "",
    rebote4: "",
    control_secuencia4: "",
    control_desempeno4: "",
    informo4: "",
    f_c_parcial4: "",

    titere5: "",
    gesto5: "",
    pase_secuencia5: "",
    pase_desempeno5: "",
    gol5: "",
    rebote5: "",
    control_secuencia5: "",
    control_desempeno5: "",
    informo5: "",
    f_c_parcial5: "",

    titere6: "",
    gesto6: "",
    pase_secuencia6: "",
    pase_desempeno6: "",
    gol6: "",
    rebote6: "",
    control_secuencia6: "",
    control_desempeno6: "",
    informo6: "",
    f_c_parcial6: "",

    titere7: "",
    gesto7: "",
    pase_secuencia7: "",
    pase_desempeno7: "",
    gol7: "",
    rebote7: "",
    control_secuencia7: "",
    control_desempeno7: "",
    informo7: "",
    f_c_parcial7: "",

    titere8: "",
    gesto8: "",
    pase_secuencia8: "",
    pase_desempeno8: "",
    gol8: "",
    rebote8: "",
    control_secuencia8: "",
    control_desempeno8: "",
    informo8: "",
    f_c_parcial8: "",

    titere9: "",
    gesto9: "",
    pase_secuencia9: "",
    pase_desempeno9: "",
    gol9: "",
    rebote9: "",
    control_secuencia9: "",
    control_desempeno9: "",
    informo9: "",
    f_c_parcial9: "",

    titere10: "",
    gesto10: "",
    pase_secuencia10: "",
    pase_desempeno10: "",
    gol10: "",
    rebote10: "",
    control_secuencia10: "",
    control_desempeno10: "",
    informo10: "",
    f_c_parcial10: "",

    titere11: "",
    gesto11: "",
    pase_secuencia11: "",
    pase_desempeno11: "",
    gol11: "",
    rebote11: "",
    control_secuencia11: "",
    control_desempeno11: "",
    informo11: "",
    f_c_parcial11: "",

    titere12: "",
    gesto12: "",
    pase_secuencia12: "",
    pase_desempeno12: "",
    gol12: "",
    rebote12: "",
    control_secuencia12: "",
    control_desempeno12: "",
    informo12: "",
    f_c_parcial12: "",

    titere13: "",
    gesto13: "",
    pase_secuencia13: "",
    pase_desempeno13: "",
    gol13: "",
    rebote13: "",
    control_secuencia13: "",
    control_desempeno13: "",
    informo13: "",
    f_c_parcial13: "",

    titere14: "",
    gesto14: "",
    pase_secuencia14: "",
    pase_desempeno14: "",
    gol14: "",
    rebote14: "",
    control_secuencia14: "",
    control_desempeno14: "",
    informo14: "",
    f_c_parcial14: "",

    titere15: "",
    gesto15: "",
    pase_secuencia15: "",
    pase_desempeno15: "",
    gol15: "",
    rebote15: "",
    control_secuencia15: "",
    control_desempeno15: "",
    informo15: "",
    f_c_parcial15: "",
  });

  // Petitions
  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  //Modals
  const abrirCerrarModalVer = () => {
    setModalVer(!modalVer);
  };

  const seleccionarTest = (test, caso) => {
    setDataTest(test);
    console.log("aquí está" + test);

    caso === "Ver" && abrirCerrarModalVer();
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

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
            {data.map((Data) => (
              <tr key={Data.id_prueba}>
                <th>
                  {Data.nom1_usu} {Data.nom2_usu} {Data.ape1_usu}{" "}
                  {Data.ape2_usu}
                </th>

                <th>{Data.num_docu}</th>

                <th>{Data.fecha_prueba}</th>

                <th>
                  <button
                    className="btn btn-primary"
                    onClick={() => seleccionarTest(Data, "Ver")}
                  >
                    Ver resultados
                  </button>
                  <button className="btn btn-danger">Eliminar</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          size="lg"
          style={{ maxWidth: "1000px", width: "100%" }}
          isOpen={modalVer}
        >
          <ModalHeader>Resultados de test</ModalHeader>

          <ModalBody>
            <table class="table">
              <thead>
                <tr>
                  <th>ZONA</th>
                  <th>TITERE</th>
                  <th>GESTO TEC</th>

                  <th colspan="2">
                    {" "}
                    PASE D-I <br />
                    SECUENCIA&nbsp;&nbsp;&nbsp;&nbsp; DESEMPEÑO
                  </th>

                  <th>GOL</th>
                  <th>REBOTE BAL</th>

                  <th colspan="2">
                    CONTROL D-I
                    <br />
                    SECUENCIA&nbsp;&nbsp;&nbsp;&nbsp; DESEMPEÑO
                  </th>

                  <th>INFORMO</th>
                  <th>F.C. PARCIAL</th>
                </tr>
              </thead>

              <tbody>
                
                <tr>
                  <td>1</td>

                  <td>{dataTest.titere1}</td>

                  <td>{dataTest.gesto1}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia1}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno1}
                  </td>

                  <td>{dataTest.gol1}</td>

                  <td>{dataTest.rebote1}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia1}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno1}
                  </td>

                  <td>{dataTest.informo1}</td>

                  <td>{dataTest.f_c_parcial1}</td>
                </tr>

              </tbody>
            </table>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => abrirCerrarModalVer()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default View_test;
