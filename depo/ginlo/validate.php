<?php

    session_start();

    if(!isset($_SESSION['correo_usu'])){
        echo '<script>
                alert("Inicie sesión, por favor");
                window.location = "http:127.0.0.1:8080/signin";
            </script>';
        session_destroy();
        die();
    }

?>