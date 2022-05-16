
import { useState, useEffect,React  } from "react";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './create_account.css';


function Create_account() {

  const baseUrl = "http://127.0.0.1:8080/depo/";

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [dataUsario, setDataUsario] = useState({
    id_usu: "",
    nom1_usu: "",  
    nom2_usu: "", 
    ape1_usu: "", 
    ape2_usu: "", 
    correo_usu: "", 
    contrasena_usu: "",
    num_docu: "", 
    ciudad_usu: "", 
    departamento_usu: "" 
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

    (caso==="Editar")?
    abrirCerrarModalEditar():
    abrirCerrarModalEliminar()
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

   const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const peticionGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
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
    f.append("correo_usu", dataUsario.correo_usu);
    f.append("contrasena_usu", dataUsario.contrasena_usu);
    f.append("ciudad_usu", dataUsario.ciudad_usu);
    f.append("departamento_usu", dataUsario.departamento_usu);
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
    f.append("correo_usu", dataUsario.correo_usu);
    f.append("contrasena_usu", dataUsario.contrasena_usu);
    f.append("ciudad_usu", dataUsario.ciudad_usu);
    f.append("departamento_usu", dataUsario.departamento_usu);
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
            Usuario.correo_usu = dataUsario.correo_usu;
            Usuario.contrasena_usu = dataUsario.contrasena_usu;
            Usuario.ciudad_usu = dataUsario.ciudad_usu;
            Usuario.departamento_usu = dataUsario.departamento_usu;
            
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
      .post(baseUrl, f, { params: { id_usu: dataUsario.id_usu} })
      .then((response) => {
        setData(data.filter((Usuario) => Usuario.id_usu !== dataUsario.id_usu));
        abrirCerrarModalEliminar();
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, [data]);


  return (
 
    <div className="App">
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
            <th>Correo</th>
            <th>Departamento</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Data) => (
            <tr key={Data.id_usu}>
              <td>{Data.num_docu}</td>
              <td>{Data.nom1_usu} {Data.nom2_usu} {Data.ape1_usu} {Data.ape2_usu}</td>
              <td>{Data.correo_usu}</td>
              <td>{Data.departamento_usu}</td>
              <td>{Data.ciudad_usu}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={()=>seleccionarUsuario(Data, "Editar")}
                >
                  Editar
                </button>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>seleccionarUsuario(Data, "Eliminar")}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalInsertar}>
        
        <ModalHeader>Insertar Contacto</ModalHeader>
        
        <ModalBody>

          <div className="form-group">
            
            <label>Número de Identificación:</label>
            <br></br>
            <input
              type="text"
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

            <label>Departamento:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="departamento_usu"
              onChange={handleChange}
            ></input>

            <label>Ciudad:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="ciudad_usu"
              onChange={handleChange}
            ></input>
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
            Cancerlar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Contacto</ModalHeader>
        <ModalBody>
          <div className="form-group">

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

            <label>Correo electronico:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="correo_usu"
              onChange={handleChange}
              value={dataUsario && dataUsario.correo_us}
            ></input>

            <label>Contraseña:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="contrasena_usu"
              onChange={handleChange}
              value={dataUsario && dataUsario.contrasena_usu}
            ></input>

            <label>Departamento:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="departamento_usu"
              onChange={handleChange}
              value={dataUsario && dataUsario.departamento_usu}
            ></input>

            <label>Ciudad:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="ciudad_usu"
              onChange={handleChange}
              value={dataUsario && dataUsario.ciudad_usu}
            ></input> 

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
            Cancerlar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Estás seguro que deseas eliminar el usuario {dataUsario && dataUsario.nom1_usu} {dataUsario && dataUsario.ape1_usu} {dataUsario && dataUsario.ape2_usu}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDelete()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>

    );
}


  


export default Create_account