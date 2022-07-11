<?php

include 'bd/BD.php';

header('Access-Control-Allow-Origin: *');


if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select * from usuarios";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll()); 
    
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='DOC'){
    unset($_POST['METHOD']);
    $query = "select * from  tipos_documento";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='SANGRE'){
    unset($_POST['METHOD']);
    $query = "select * from  tipos_sangre";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='ROL'){
    unset($_POST['METHOD']);
    $query = "select * from  roles";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='GENERO'){
    unset($_POST['METHOD']);
    $query = "select * from  generos";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='ESTADO'){
    unset($_POST['METHOD']);
    $query = "select * from  estados";
    $resultado = metodoGet($query);
    echo json_encode($resultado->fetchAll());
    header("HTTP/1.1 200 OK");
    exit();
}


if($_POST['METHOD']=='POST'){
    unset($_POST['METHOD']);
    $nm1=$_POST['nom1_usu'];
    $nm2=$_POST['nom2_usu'];
    $ap1=$_POST['ape1_usu'];
    $ap2=$_POST['ape2_usu'];
    $f_nac=$_POST['fecha_nac_usu'];
    $correo=$_POST['correo_usu'];
    $contra=$_POST['contrasena_usu'];
    $tipoidentificacion=$_POST['id_documento'];
    $identificacion=$_POST['num_docu'];
    $estado=$_POST['id_estado'];
    $genero=$_POST['id_genero'];
    $rol=$_POST['id_rol'];
    $sangre=$_POST['id_sangre'];
    $query="
    INSERT INTO usuarios (nom1_usu, nom2_usu, ape1_usu, ape2_usu, fecha_nac_usu, 
    correo_usu, contrasena_usu, id_documento, num_docu, id_estado, id_genero, id_rol, id_sangre) 
    VALUES ('$nm1', '$nm2', '$ap1', '$ap2', '$f_nac', '$correo', '$contra', '$tipoidentificacion',
    '$identificacion', '$estado', '$genero', '$rol', '$sangre' );";
    $queryAutoIncrement="select MAX(id_usu) as id_usu from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}



if($_POST['METHOD']=='PUT'){
    unset($_POST['METHOD']);
    $id=$_POST['id_usu'];
    $nm1=$_POST['nom1_usu'];
    $nm2=$_POST['nom2_usu'];
    $ap1=$_POST['ape1_usu'];
    $ap2=$_POST['ape2_usu'];
    $f_nac=$_POST['fecha_nac_usu'];
    $correo=$_POST['correo_usu'];
    $contra=$_POST['contrasena_usu'];
    $tipoidentificacion=$_POST['id_documento'];
    $identificacion=$_POST['num_docu'];
    $estado=$_POST['id_estado'];
    $genero=$_POST['id_genero'];
    $rol=$_POST['id_rol'];
    $sangre=$_POST['id_sangre'];
    $query="UPDATE usuarios  SET num_docu='$identificacion', nom1_usu='$nm1', nom2_usu = '$nm2', ape1_usu='$ap1', 
    ape2_usu=' $ap2', correo_usu='$correo', contrasena_usu='$contra',  fecha_nac_usu='$f_nac', id_documento='$tipoidentificacion', 
    id_estado='$estado', id_genero='$genero', id_rol='$rol', id_sangre='$sangre' WHERE id_usu='$id'";
    $resultado=metodoPut($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id_usu'];
    $query="DELETE FROM usuarios WHERE id_usu='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>