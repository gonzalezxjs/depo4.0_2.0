import { useState, useEffect, React } from "react";
import axios from "axios";
import "./Perform_test.css";
import Admin from "../1_home dashboard/Admin";

function Perform_test() {
  const [data, setData] = useState([]);
  const baseUrl = "http://127.0.0.1:8080/depo/";
  const [dataTest, setDataTest] = useState({
    fecha_prueba: "",
    num_docu: "",

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataTest((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(dataTest);
  };

  const peticionTest = async () => {
    var f = new FormData();

    f.append("fecha_prueba", dataTest.fecha_prueba);
    f.append("num_docu", dataTest.num_docu);
    f.append("titere1", dataTest.titere1);
    f.append("gesto1", dataTest.gesto1);
    f.append("pase_secuencia1", dataTest.pase_secuencia1);
    f.append("pase_desempeno1", dataTest.pase_desempeno1);
    f.append("gol1", dataTest.gol1);
    f.append("rebote1", dataTest.rebote1);
    f.append("control_secuencia1", dataTest.control_secuencia1);
    f.append("control_desempeno1", dataTest.control_desempeno1);
    f.append("informo1", dataTest.informo1);
    f.append("f_c_parcial1", dataTest.f_c_parcial1);

    f.append("titere2", dataTest.titere2);
    f.append("gesto2", dataTest.gesto2);
    f.append("pase_secuencia2", dataTest.pase_secuencia2);
    f.append("pase_desempeno2", dataTest.pase_desempeno2);
    f.append("gol2", dataTest.gol2);
    f.append("rebote2", dataTest.rebote2);
    f.append("control_secuencia2", dataTest.control_secuencia2);
    f.append("control_desempeno2", dataTest.control_desempeno2);
    f.append("informo2", dataTest.informo2);
    f.append("f_c_parcial2", dataTest.f_c_parcial2);

    f.append("titere3", dataTest.titere3);
    f.append("gesto3", dataTest.gesto3);
    f.append("pase_secuencia3", dataTest.pase_secuencia3);
    f.append("pase_desempeno3", dataTest.pase_desempeno3);
    f.append("gol3", dataTest.gol3);
    f.append("rebote3", dataTest.rebote3);
    f.append("control_secuencia3", dataTest.control_secuencia3);
    f.append("control_desempeno3", dataTest.control_desempeno3);
    f.append("informo3", dataTest.informo3);
    f.append("f_c_parcial3", dataTest.f_c_parcial3);

    f.append("titere4", dataTest.titere4);
    f.append("gesto4", dataTest.gesto4);
    f.append("pase_secuencia4", dataTest.pase_secuencia4);
    f.append("pase_desempeno4", dataTest.pase_desempeno4);
    f.append("gol4", dataTest.gol4);
    f.append("rebote4", dataTest.rebote4);
    f.append("control_secuencia4", dataTest.control_secuencia4);
    f.append("control_desempeno4", dataTest.control_desempeno4);
    f.append("informo4", dataTest.informo4);
    f.append("f_c_parcial4", dataTest.f_c_parcial4);

    f.append("titere5", dataTest.titere5);
    f.append("gesto5", dataTest.gesto5);
    f.append("pase_secuencia5", dataTest.pase_secuencia5);
    f.append("pase_desempeno5", dataTest.pase_desempeno5);
    f.append("gol5", dataTest.gol5);
    f.append("rebote5", dataTest.rebote5);
    f.append("control_secuencia5", dataTest.control_secuencia5);
    f.append("control_desempeno5", dataTest.control_desempeno5);
    f.append("informo5", dataTest.informo5);
    f.append("f_c_parcial5", dataTest.f_c_parcial5);

    f.append("titere6", dataTest.titere6);
    f.append("gesto6", dataTest.gesto6);
    f.append("pase_secuencia6", dataTest.pase_secuencia6);
    f.append("pase_desempeno6", dataTest.pase_desempeno6);
    f.append("gol6", dataTest.gol6);
    f.append("rebote6", dataTest.rebote6);
    f.append("control_secuencia6", dataTest.control_secuencia6);
    f.append("control_desempeno6", dataTest.control_desempeno6);
    f.append("informo6", dataTest.informo6);
    f.append("f_c_parcial6", dataTest.f_c_parcial6);

    f.append("titere7", dataTest.titere7);
    f.append("gesto7", dataTest.gesto7);
    f.append("pase_secuencia7", dataTest.pase_secuencia7);
    f.append("pase_desempeno7", dataTest.pase_desempeno7);
    f.append("gol7", dataTest.gol7);
    f.append("rebote7", dataTest.rebote7);
    f.append("control_secuencia7", dataTest.control_secuencia7);
    f.append("control_desempeno7", dataTest.control_desempeno7);
    f.append("informo7", dataTest.informo7);
    f.append("f_c_parcial7", dataTest.f_c_parcial7);

    f.append("titere8", dataTest.titere8);
    f.append("gesto8", dataTest.gesto8);
    f.append("pase_secuencia8", dataTest.pase_secuencia8);
    f.append("pase_desempeno8", dataTest.pase_desempeno8);
    f.append("gol8", dataTest.gol8);
    f.append("rebote7", dataTest.rebote8);
    f.append("control_secuencia8", dataTest.control_secuencia8);
    f.append("control_desempeno8", dataTest.control_desempeno8);
    f.append("informo8", dataTest.informo8);
    f.append("f_c_parcial8", dataTest.f_c_parcial8);

    f.append("titere9", dataTest.titere9);
    f.append("gesto9", dataTest.gesto9);
    f.append("pase_secuencia9", dataTest.pase_secuencia9);
    f.append("pase_desempeno9", dataTest.pase_desempeno9);
    f.append("gol9", dataTest.gol9);
    f.append("rebote9", dataTest.rebote8);
    f.append("control_secuencia9", dataTest.control_secuencia9);
    f.append("control_desempeno9", dataTest.control_desempeno9);
    f.append("informo9", dataTest.informo9);
    f.append("f_c_parcial9", dataTest.f_c_parcial9);

    f.append("titere10", dataTest.titere10);
    f.append("gesto10", dataTest.gesto10);
    f.append("pase_secuencia10", dataTest.pase_secuencia10);
    f.append("pase_desempeno10", dataTest.pase_desempeno10);
    f.append("gol10", dataTest.gol10);
    f.append("rebote10", dataTest.rebote8);
    f.append("control_secuencia10", dataTest.control_secuencia10);
    f.append("control_desempeno10", dataTest.control_desempeno10);
    f.append("informo10", dataTest.informo10);
    f.append("f_c_parcial10", dataTest.f_c_parcial10);

    f.append("titere11", dataTest.titere11);
    f.append("gesto11", dataTest.gesto11);
    f.append("pase_secuencia11", dataTest.pase_secuencia11);
    f.append("pase_desempeno11", dataTest.pase_desempeno11);
    f.append("gol11", dataTest.gol11);
    f.append("rebote11", dataTest.rebote11);
    f.append("control_secuencia11", dataTest.control_secuencia11);
    f.append("control_desempeno11", dataTest.control_desempeno11);
    f.append("informo11", dataTest.informo11);
    f.append("f_c_parcial11", dataTest.f_c_parcial11);

    f.append("titere12", dataTest.titere12);
    f.append("gesto12", dataTest.gesto12);
    f.append("pase_secuencia12", dataTest.pase_secuencia12);
    f.append("pase_desempeno12", dataTest.pase_desempeno12);
    f.append("gol12", dataTest.gol12);
    f.append("rebote12", dataTest.rebote12);
    f.append("control_secuencia12", dataTest.control_secuencia12);
    f.append("control_desempeno12", dataTest.control_desempeno12);
    f.append("informo12", dataTest.informo12);
    f.append("f_c_parcial12", dataTest.f_c_parcial12);

    f.append("titere13", dataTest.titere13);
    f.append("gesto13", dataTest.gesto13);
    f.append("pase_secuencia13", dataTest.pase_secuencia13);
    f.append("pase_desempeno13", dataTest.pase_desempeno13);
    f.append("gol13", dataTest.gol13);
    f.append("rebote13", dataTest.rebote1);
    f.append("control_secuencia13", dataTest.control_secuencia13);
    f.append("control_desempeno13", dataTest.control_desempeno13);
    f.append("informo13", dataTest.informo13);
    f.append("f_c_parcial13", dataTest.f_c_parcial13);

    f.append("titere14", dataTest.titere14);
    f.append("gesto14", dataTest.gesto14);
    f.append("pase_secuencia14", dataTest.pase_secuencia14);
    f.append("pase_desempeno14", dataTest.pase_desempeno14);
    f.append("gol14", dataTest.gol14);
    f.append("rebote14", dataTest.rebote14);
    f.append("control_secuencia14", dataTest.control_secuencia14);
    f.append("control_desempeno14", dataTest.control_desempeno14);
    f.append("informo14", dataTest.informo14);
    f.append("f_c_parcial14", dataTest.f_c_parcial14);

    f.append("titere15", dataTest.titere15);
    f.append("gesto15", dataTest.gesto15);
    f.append("pase_secuencia15", dataTest.pase_secuencia15);
    f.append("pase_desempeno15", dataTest.pase_desempeno15);
    f.append("gol15", dataTest.gol15);
    f.append("rebote15", dataTest.rebote15);
    f.append("control_secuencia15", dataTest.control_secuencia15);
    f.append("control_desempeno15", dataTest.control_desempeno15);
    f.append("informo15", dataTest.informo15);
    f.append("f_c_parcial15", dataTest.f_c_parcial15);

    f.append("METHOD", "TEST");
    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
      console.log(response);
    });
  };

  

  return (
    <div>
      <Admin></Admin>

      <div class="main">
        <div class="father_test">
          <div class="son_test">
            <div className="outer-wrapper">
              <div className="table-wrapper">
                <form>

                  <p>
                    <label for="usu">N. identificación</label>
                    <input type="text" name="num_docu" id="usu" placeholder="N. identificación del deportista" onChange={handleChange}></input>
                  </p>

                  <table>
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

                      <tr className="tr">
                        <td>1</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere1"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto1"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="pase_secuencia1"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="pase_desempeno1"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol1" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote1" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="control_secuencia1"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="control_desempeno1"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo1" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input
                            type="number"
                            name="f_c_parcial1"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>2</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere2"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto2"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="pase_secuencia2"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="pase_desempeno2"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol2" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote2" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="control_secuencia2"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="control_desempeno2"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo2" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input
                            type="number"
                            name="f_c_parcial2"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>3</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere3"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto3"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="pase_secuencia3"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="pase_desempeno3"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol3" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote3" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select
                            name="control_secuencia3"
                            onChange={handleChange}
                          >
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select
                            name="control_desempeno3"
                            onChange={handleChange}
                          >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo3" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input
                            type="number"
                            name="f_c_parcial3"
                            onChange={handleChange}
                          />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>4</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere4"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto4" onChange={handleChange} />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia4" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno4" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol4" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote4" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia4" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno4" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo4" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial4" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>5</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere5"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto5" onChange={handleChange}/>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia5" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno5" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol5" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote5" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia5" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno5" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo5" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial5" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>6</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere6"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto6" onChange={handleChange}/>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia6" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno6" onChange={handleChange} >
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol6" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote6" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia6" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno6" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo6" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial6" onChange={handleChange} />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>7</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere7"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto7" onChange={handleChange} />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia7" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno7" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol7" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote7" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia7" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno7" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo7" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial7" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>8</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere8"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto8" onChange={handleChange}/>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia8" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno8" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol8" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote8" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia8" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno8" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo8" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial8" onChange={handleChange} />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>9</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere9"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input type="number" min="0" max="20" name="gesto9" onChange={handleChange}/>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia9" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno9" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol9" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote9" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia9" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno9" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo9" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial9" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>10</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere10"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto10"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia10" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno10" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol10" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote10" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia10" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno10" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo10" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial10" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>11</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere11"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto11"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia11" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno11" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol11" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote11" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia11" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno11" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo11" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial11" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>12</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere12"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto12"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia12" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno12" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol12" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote12" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia12" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno12" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo12" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial12" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>13</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere13"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto13"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia13" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno13" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol13" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote13" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia13" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno13" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo13" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial13" onChange={handleChange} />
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>14</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere14"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto14"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia14" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno14" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol14" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote14" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia14" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno14" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo14" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial14" onChange={handleChange}/>
                        </td>
                      </tr>

                      <tr className="tr">
                        <td>15</td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="titere15"
                            onChange={handleChange}
                          />
                        </td>

                        <td>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            name="gesto15"
                            onChange={handleChange}
                          />
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="pase_secuencia15" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="pase_desempeno15" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="gol15" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select value="rebote15" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td colSpan={2} className="tduno">
                          <select name="control_secuencia15" onChange={handleChange}>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <select name="control_desempeno15" onChange={handleChange}>
                            <option value="Bien">Bien</option>
                            <option value="Mal">Mal</option>
                          </select>
                        </td>

                        <td className="tduno">
                          <select name="informo15" onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" name="f_c_parcial15" onChange={handleChange} />
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>

                  <button  type="submit" className="btn btn-primary" onClick={() => peticionTest()}>
                      Insertar
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perform_test;
