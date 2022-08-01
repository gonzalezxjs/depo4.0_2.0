import { useState, useEffect, React } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create_account.css";
import Admin from "../1_home dashboard/Admin";

function Create_account() {
  const baseUrl = "http://127.0.0.1:8080/depo/index.php";
  const [dataNRol, setDataNRol] = useState([]);
  const [dataDoc, setDataDoc] = useState([]);
  const [dataSangre, setDataSangre] = useState([]);
  const [dataRol, setDataRol] = useState([]);
  const [dataGenero, setDataGenero] = useState([]);
  const [dataEstado, setDataEstado] = useState([]);
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [dataUsario, setDataUsario] = useState({
    id_usu: "",
    nom1_usu: "",
    nom2_usu: "",
    ape1_usu: "",
    ape2_usu: "",
    fecha_nac_usu: "",
    correo_usu: "",
    contrasena_usu: "",
    id_documento: "",
    num_docu: "",
    id_estado: "",
    id_genero: "",
    id_rol: "",
    id_sangre: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsario((prevState) => ({
      ...prevState,

      [name]: value,
    }));

    console.log(dataUsario);
  };
  

  const seleccionarUsuario = (usuario, caso) => {
    setDataUsario(usuario);
    console.log("aquí está" + usuario);

    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);

      console.log(response);
    });
  };

  const peticionDoc = async () => {
    var f = new FormData();
    f.append("METHOD", "DOC");
    await axios.post(baseUrl, f).then((response) => {
      setDataDoc(response.data);
    });
  };

  const peticionSangre = async () => {
    var f = new FormData();
    f.append("METHOD", "SANGRE");
    await axios.post(baseUrl, f).then((response) => {
      setDataSangre(response.data);
    });
  };

  const peticionRol = async () => {
    var f = new FormData();
    f.append("METHOD", "ROL");
    await axios.post(baseUrl, f).then((response) => {
      setDataRol(response.data);
    });
  };

  const peticionGenero = async () => {
    var f = new FormData();
    f.append("METHOD", "GENERO");
    await axios.post(baseUrl, f).then((response) => {
      setDataGenero(response.data);
    });
  };

  const peticionEstado = async () => {
    var f = new FormData();
    f.append("METHOD", "ESTADO");
    await axios.post(baseUrl, f).then((response) => {
      setDataEstado(response.data);
    });
  };

  const peticionPost = async () => {
    var f = new FormData();

    f.append("id_usu", dataUsario.id_usu);
    f.append("num_docu", dataUsario.num_docu);
    f.append("nom1_usu", dataUsario.nom1_usu);
    f.append("nom2_usu", dataUsario.nom2_usu);
    f.append("ape1_usu", dataUsario.ape1_usu);
    f.append("ape2_usu", dataUsario.ape2_usu);
    f.append("fecha_nac_usu", dataUsario.fecha_nac_usu);
    f.append("correo_usu", dataUsario.correo_usu);
    f.append("contrasena_usu", dataUsario.contrasena_usu);
    f.append("id_documento", dataUsario.id_documento);
    f.append("id_rol", dataUsario.id_rol);
    f.append("id_estado", dataUsario.id_estado);
    f.append("id_genero", dataUsario.id_genero);
    f.append("id_sangre", dataUsario.id_sangre);
    f.append("METHOD", "POST");

    await axios.post(baseUrl, f).then((response) => {
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
      console.log(response);
    });
  };

  const peticionPut = async () => {
    var f = new FormData();

    f.append("id_usu", dataUsario.id_usu);
    f.append("num_docu", dataUsario.num_docu);
    f.append("nom1_usu", dataUsario.nom1_usu);
    f.append("nom2_usu", dataUsario.nom2_usu);
    f.append("ape1_usu", dataUsario.ape1_usu);
    f.append("ape2_usu", dataUsario.ape2_usu);
    f.append("fecha_nac_usu", dataUsario.fecha_nac_usu);
    f.append("correo_usu", dataUsario.correo_usu);
    f.append("contrasena_usu", dataUsario.contrasena_usu);
    f.append("id_documento", dataUsario.id_documento);
    f.append("id_estado", dataUsario.id_estado);
    f.append("id_genero", dataUsario.id_genero);
    f.append("id_rol", dataUsario.id_rol);
    f.append("id_sangre", dataUsario.id_sangre);
    f.append("METHOD", "PUT");

    await axios
      .post(baseUrl, f, { params: { id_usu: dataUsario.id_usu } })
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((Usuario) => {
          if (Usuario.id_usu === dataUsario.id_usu) {
            Usuario.id_usu = dataUsario.id_usu;
            Usuario.num_docu = dataUsario.num_docu;
            Usuario.nom1_usu = dataUsario.nom1_usu;
            Usuario.nom2_usu = dataUsario.nom2_usu;
            Usuario.ape1_usu = dataUsario.ape1_usu;
            Usuario.ape2_usu = dataUsario.ape2_usu;
            Usuario.fecha_nac_usu = dataUsario.fecha_nac_usu;
            Usuario.correo_usu = dataUsario.correo_usu;
            Usuario.contrasena_usu = dataUsario.contrasena_usu;
            Usuario.id_documento = dataUsario.id_documento;
            Usuario.id_estado = dataUsario.id_estado;
            Usuario.id_genero = dataUsario.id_genero;
            Usuario.id_rol = dataUsario.id_rol;
            Usuario.id_sangre = dataUsario.id_sangre;
          }
          console.log(response);
        });
        setData(dataNueva);
        console.log(dataNueva);
        abrirCerrarModalEditar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionDelete = async () => {
    var f = new FormData();

    f.append("METHOD", "DELETE");
    await axios
      .post(baseUrl, f, { params: { id_usu: dataUsario.id_usu } })
      .then((response) => {
        setData(data.filter((Usuario) => Usuario.id_usu !== dataUsario.id_usu));
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const peticionNombreRol = async () => {
    var f = new FormData();
    f.append("METHOD", "NOMROL");
    await axios.post(baseUrl, f).then((response) => {
      setDataNRol(response.data);
      console.log(response);
    });

    
  };

  useEffect(() => {
    peticionGet();
  }, []);

  useEffect(() => {
    peticionDoc();
  }, []);

  useEffect(() => {
    peticionSangre();
  }, []);

  useEffect(() => {
    peticionRol();
  }, []);

  useEffect(() => {
    peticionGenero();
  }, []);

  useEffect(() => {
    peticionEstado();
  }, []);

  useEffect(() => {
    peticionNombreRol();
  }, []);

  return (
    <div className="App">
      <Admin></Admin>

      <div class="main">
        
        <button
          className="btn btn-success"
          onClick={() => abrirCerrarModalInsertar()}
        >
          Agregar Contacto
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Fecha nacimiento</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {data.map((Data) => (
              <tr key={Data.id_usu}>
                <th>{Data.num_docu}</th>

                <th>
                  {Data.nom1_usu} {Data.nom2_usu} {Data.ape1_usu}{" "}
                  {Data.ape2_usu}
                </th>

                <th>{Data.fecha_nac_usu}</th>

                <th>{Data.correo_usu}</th>

                <th>
                    {Data.nom_rol} 
                </th>

                <th>
                  <button
                    className="btn btn-primary"
                    onClick={() => seleccionarUsuario(Data, "Editar")}
                  >
                    Editar
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => seleccionarUsuario(Data, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isOpen={modalInsertar}>
          <ModalHeader>Insertar Contacto</ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label>Tipo de identificación:</label>
              <br></br>
              <select
                className="form-control"
                name="id_documento"
                onChange={handleChange}
              >
                <option value="">Seleccione un tipo de identificación</option>
                {dataDoc.map((Documento) => (
                  <option value={Documento.id_documento}>
                    {Documento.nom_documento}
                  </option>
                ))}
              </select>

              <label>Número de identificación:</label>
              <br></br>
              <input
                type="number"
                className="form-control"
                name="num_docu"
                onChange={handleChange}
              ></input>

              <label>Primer nombre:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="nom1_usu"
                onChange={handleChange}
              ></input>

              <label>Segundo nombre:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="nom2_usu"
                onChange={handleChange}
              ></input>

              <label>Primer apellido:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="ape1_usu"
                onChange={handleChange}
              ></input>

              <label>Segundo apellido:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="ape2_usu"
                onChange={handleChange}
              ></input>

              <label>Fecha de nacimiento:</label>
              <br></br>
              <input
                type="date"
                className="form-control"
                name="fecha_nac_usu"
                onChange={handleChange}
              ></input>

              <label>Correo electronico:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="correo_usu"
                onChange={handleChange}
              ></input>

              <label>Contraseña:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="contrasena_usu"
                onChange={handleChange}
              ></input>

              <label>Estado del usuario:</label>
              <br></br>
              <select
                className="form-control"
                name="id_estado"
                onChange={handleChange}
              >
                <option value="">Seleccione el estado</option>
                {dataEstado.map((Estado) => (
                  <option value={Estado.id_estado}>{Estado.nom_estado}</option>
                ))}
              </select>

              <label>Género:</label>
              <br></br>
              <select
                className="form-control"
                name="id_genero"
                onChange={handleChange}
              >
                <option value="">Seleccione el género</option>
                {dataGenero.map((Genero) => (
                  <option value={Genero.id_genero}>{Genero.nom_genero}</option>
                ))}
              </select>

              <label>Tipo de rol:</label>
              <br></br>
              <select
                className="form-control"
                name="id_rol"
                onChange={handleChange}
              >
                <option value="">Seleccione el rol</option>
                {dataRol.map((Rol) => (
                  <option value={Rol.id_rol}>{Rol.nom_rol}</option>
                ))}
              </select>

              <label>Tipo de sangre:</label>
              <br></br>
              <select
                className="form-control"
                name="id_sangre"
                onChange={handleChange}
              >
                <option value="">Seleccione un tipo de sangre</option>
                {dataSangre.map((Sangre) => (
                  <option value={Sangre.id_sangre}>{Sangre.nom_sangre}</option>
                ))}
              </select>
            </div>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPost()}>
              Insertar
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => abrirCerrarModalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        
        </Modal>

        <Modal isOpen={modalEditar}>
          <ModalHeader>Editar Contacto</ModalHeader>
          
          <ModalBody>
            <div className="form-group">
              <label>Tipo de identificación:</label>
              <br></br>
              <select
                className="form-control"
                name="id_documento"
                onChange={handleChange}
                value={dataUsario && dataUsario.id_documento}
              >
                <option value="">Seleccione un tipo de identificación</option>

                {dataDoc.map((Documento) => (
                  <option value={Documento.id_documento}>
                    {Documento.nom_documento}
                  </option>
                ))}
              </select>

              <label>Número de Identificación:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="num_docu"
                onChange={handleChange}
                value={dataUsario && dataUsario.num_docu}
              ></input>

              <label>Primer nombre:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="nom1_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.nom1_usu}
              ></input>

              <label>Segundo nombre:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="nom2_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.nom2_usu}
              ></input>

              <label>Primer apellido:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="ape1_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.ape1_usu}
              ></input>

              <label>Segundo apellido:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="ape2_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.ape2_usu}
              ></input>

              <label>Fecha de nacimiento:</label>
              <br></br>
              <input
                type="date"
                className="form-control"
                name="fecha_nac_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.fecha_nac_usu}
              ></input>

              <label>Correo electronico:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="correo_usu"
                onChange={handleChange}
                value={dataUsario && dataUsario.correo_usu}
              ></input>

              <label>Contraseña:</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                name="contrasena_usu"
                onChange={handleChange}
              ></input>

              <label>Estado del usuario:</label>
              <br></br>
              <select
                className="form-control"
                name="id_estado"
                onChange={handleChange}
                value={dataUsario && dataUsario.id_estado}
              >
                <option value="">Seleccione el estado</option>
                {dataEstado.map((Estado) => (
                  <option value={Estado.id_estado}>{Estado.nom_estado}</option>
                ))}
              </select>

              <label>Género:</label>
              <br></br>
              <select
                className="form-control"
                name="id_genero"
                onChange={handleChange}
                value={dataUsario && dataUsario.id_genero}
              >
                <option value="">Seleccione el género</option>
                {dataGenero.map((Genero) => (
                  <option value={Genero.id_genero}>{Genero.nom_genero}</option>
                ))}
              </select>

              <label>Tipo de rol:</label>
              <br></br>
              <select
                className="form-control"
                name="id_rol"
                onChange={handleChange}
                value={dataUsario && dataUsario.id_rol}
              >
                <option value="">Seleccione el rol</option>
                {dataRol.map((Rol) => (
                  <option value={Rol.id_rol}>{Rol.nom_rol}</option>
                ))}
              </select>

              <label>Tipo de sangre:</label>
              <br></br>
              <select
                className="form-control"
                name="id_sangre"
                onChange={handleChange}
                value={dataUsario && dataUsario.id_sangre}
              >
                <option value="">Seleccione un tipo de sangre</option>
                {dataSangre.map((Sangre) => (
                  <option value={Sangre.id_sangre}>{Sangre.nom_sangre}</option>
                ))}
              </select>
            </div>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPut()}>
              Insertar
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => abrirCerrarModalEditar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            ¿Estás seguro que deseas eliminar el usuario{" "}
            {dataUsario && dataUsario.nom1_usu}{" "}
            {dataUsario && dataUsario.ape1_usu}{" "}
            {dataUsario && dataUsario.ape2_usu}?
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

export default Create_account;
