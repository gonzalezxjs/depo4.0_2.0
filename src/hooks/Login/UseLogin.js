import { useState } from "react";
import { LoginConexion } from "../../routes/Conexions";
import { useNavigate } from "react-router-dom";



export const UseLogin = () => {

    let navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  console.log(dataLogin);

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "PHPSESSID=fsk0om3qg635f4mdt73d762244");

      var raw = JSON.stringify({
        correo_usu: dataLogin.email,
        contrasena_usu: dataLogin.password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "manual",
      };

      fetch("http://localhost:8080/depo/ginlo/login.php", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let data = JSON.parse(result);

          if (
            data.conectado == false &&
            data.error == "La clave es incorrecta, vuelva a intentarlo."
          ) {
            alert("Datos incorrectos, vuelva a intentarlo");
          }
      
          if (data.conectado == false && data.error == "El usuario no existe.") {
            alert("El usuario no existe");
          }

          if ((data.conectado) & (data.id_rol == "1")){
                navigate("/admin");
              global.authen = true;
              console.log("El valor de authen es " , global.authen);
          
              } else if ((data.conectado) & (data.id_rol == "3")) {
                navigate("/user");
              } 

          

          console.log(data);
        })
        .catch((error) => console.log("error", error));
    
  };

  return { handleLogin, handleChange };
};
