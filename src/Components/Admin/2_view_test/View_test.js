import { React, useState, useEffect } from "react";
import Admin from "../1_home dashboard/Admin";
import "./View_test.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function View_test() {
  const baseUrl = "http://127.0.0.1:8080/depo/index2.php";
  const [modalVer, setModalVer] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [data, setData] = useState([]);
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

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarTest = (test, caso) => {
    setDataTest(test);
    console.log("aquí está" + Object.values(test));

    if(caso == "Ver"){
        abrirCerrarModalVer();
    };

    if(caso == "Eliminar"){
      abrirCerrarModalEliminar();
    };
  
    
  };


  const peticionDelete = async () => {
    var f = new FormData();

    f.append("METHOD", "DELETE");
    await axios
      .post(baseUrl, f, { params: { id_prueba: dataTest.id_prueba} })
      .then((response) => {
        setData(data.filter((Test) => Test.id_prueba !== dataTest.id_prueba));
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

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
                  <button className="btn btn-danger"
                    onClick={() => seleccionarTest(Data, "Eliminar")}
                  >Eliminar</button>
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

                <tr>
                  <td>2</td>

                  <td>{dataTest.titere2}</td>

                  <td>{dataTest.gesto2}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia2}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno2}
                  </td>

                  <td>{dataTest.gol2}</td>

                  <td>{dataTest.rebote2}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia2}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno2}
                  </td>

                  <td>{dataTest.informo2}</td>

                  <td>{dataTest.f_c_parcial2}</td>
                </tr>

                <tr>
                  <td>3</td>

                  <td>{dataTest.titere3}</td>

                  <td>{dataTest.gesto3}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia3}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno3}
                  </td>

                  <td>{dataTest.gol3}</td>

                  <td>{dataTest.rebote3}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia3}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno3}
                  </td>

                  <td>{dataTest.informo3}</td>

                  <td>{dataTest.f_c_parcial3}</td>
                </tr>

                <tr>
                  <td>4</td>

                  <td>{dataTest.titere4}</td>

                  <td>{dataTest.gesto4}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia4}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno4}
                  </td>

                  <td>{dataTest.gol4}</td>

                  <td>{dataTest.rebote4}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia4}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno4}
                  </td>

                  <td>{dataTest.informo4}</td>

                  <td>{dataTest.f_c_parcial4}</td>
                </tr>

                <tr>
                  <td>5</td>

                  <td>{dataTest.titere5}</td>

                  <td>{dataTest.gesto5}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia5}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno5}
                  </td>

                  <td>{dataTest.gol5}</td>

                  <td>{dataTest.rebote5}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia5}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno5}
                  </td>

                  <td>{dataTest.informo5}</td>

                  <td>{dataTest.f_c_parcial5}</td>
                </tr>

                <tr>
                  <td>6</td>

                  <td>{dataTest.titere6}</td>

                  <td>{dataTest.gesto6}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia6}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno6}
                  </td>

                  <td>{dataTest.gol6}</td>

                  <td>{dataTest.rebote6}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia6}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno6}
                  </td>

                  <td>{dataTest.informo6}</td>

                  <td>{dataTest.f_c_parcial6}</td>
                </tr>

                <tr>
                  <td>7</td>

                  <td>{dataTest.titere7}</td>

                  <td>{dataTest.gesto7}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia7}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno7}
                  </td>

                  <td>{dataTest.gol7}</td>

                  <td>{dataTest.rebote7}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia7}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno7}
                  </td>

                  <td>{dataTest.informo7}</td>

                  <td>{dataTest.f_c_parcial7}</td>
                </tr>

                <tr>
                  <td>8</td>

                  <td>{dataTest.titere8}</td>

                  <td>{dataTest.gesto8}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia8}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno8}
                  </td>

                  <td>{dataTest.gol8}</td>

                  <td>{dataTest.rebote8}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia8}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno8}
                  </td>

                  <td>{dataTest.informo8}</td>

                  <td>{dataTest.f_c_parcial8}</td>
                </tr>

                <tr>
                  <td>9</td>

                  <td>{dataTest.titere9}</td>

                  <td>{dataTest.gesto9}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia9}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno9}
                  </td>

                  <td>{dataTest.gol9}</td>

                  <td>{dataTest.rebote9}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia9}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno9}
                  </td>

                  <td>{dataTest.informo9}</td>

                  <td>{dataTest.f_c_parcial9}</td>
                </tr>

                <tr>
                  <td>10</td>

                  <td>{dataTest.titere10}</td>

                  <td>{dataTest.gesto10}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia10}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno10}
                  </td>

                  <td>{dataTest.gol10}</td>

                  <td>{dataTest.rebote10}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia10}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno10}
                  </td>

                  <td>{dataTest.informo10}</td>

                  <td>{dataTest.f_c_parcial10}</td>
                </tr>

                <tr>
                  <td>11</td>

                  <td>{dataTest.titere11}</td>

                  <td>{dataTest.gesto11}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia11}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno11}
                  </td>

                  <td>{dataTest.gol11}</td>

                  <td>{dataTest.rebote11}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia11}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno11}
                  </td>

                  <td>{dataTest.informo11}</td>

                  <td>{dataTest.f_c_parcial11}</td>
                </tr>

                <tr>
                  <td>2</td>

                  <td>{dataTest.titere12}</td>

                  <td>{dataTest.gesto12}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia12}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno12}
                  </td>

                  <td>{dataTest.gol12}</td>

                  <td>{dataTest.rebote12}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia12}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno12}
                  </td>

                  <td>{dataTest.informo12}</td>

                  <td>{dataTest.f_c_parcial12}</td>
                </tr>

                <tr>
                  <td>13</td>

                  <td>{dataTest.titere13}</td>

                  <td>{dataTest.gesto13}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia13}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno13}
                  </td>

                  <td>{dataTest.gol13}</td>

                  <td>{dataTest.rebote13}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia13}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno13}
                  </td>

                  <td>{dataTest.informo13}</td>

                  <td>{dataTest.f_c_parcial13}</td>
                </tr>

                <tr>
                  <td>14</td>

                  <td>{dataTest.titere14}</td>

                  <td>{dataTest.gesto14}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia14}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno14}
                  </td>

                  <td>{dataTest.gol14}</td>

                  <td>{dataTest.rebote14}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia14}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno14}
                  </td>

                  <td>{dataTest.informo14}</td>

                  <td>{dataTest.f_c_parcial14}</td>
                </tr>

                <tr>
                  <td>15</td>

                  <td>{dataTest.titere15}</td>

                  <td>{dataTest.gesto15}</td>

                  <td colSpan={2}>
                    {dataTest.pase_secuencia15}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.pase_desempeno15}
                  </td>

                  <td>{dataTest.gol15}</td>

                  <td>{dataTest.rebote15}</td>

                  <td colSpan={2}>
                    {dataTest.control_secuencia15}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dataTest.control_desempeno15}
                  </td>

                  <td>{dataTest.informo15}</td>

                  <td>{dataTest.f_c_parcial15}</td>
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
        
        <Modal isOpen={modalEliminar}>
          <ModalBody>
            ¿Está seguro que desea eliminar este test?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => peticionDelete()}>
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => abrirCerrarModalEliminar()}
            >
              No
            </button>
          </ModalFooter>
        </Modal>

      </div>
    </div>
  );
}

export default View_test;
