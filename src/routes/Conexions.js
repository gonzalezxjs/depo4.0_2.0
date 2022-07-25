export const LoginConexion = (dataLogin) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "PHPSESSID=fsk0om3qg635f4mdt73d762244");

  var raw = JSON.stringify({
    correo_usu: dataLogin.email,
    contrasena_usu: dataLogin.password,
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:8080/depo/ginlo/login.php", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
