<?php

include 'bd/BD.php';
date_default_timezone_set('America/Bogota');
header('Access-Control-Allow-Origin: *');


if($_SERVER['REQUEST_METHOD']=='GET'){
    $query="select prueba.id_prueba, prueba.num_docu, usuarios.nom1_usu, usuarios.nom2_usu, usuarios.ape1_usu, usuarios.ape2_usu, fecha_prueba, titere1, gesto1, pase_secuencia1, 
    pase_desempeno1, gol1, rebote1, control_secuencia1, control_desempeno1, informo1, f_c_parcial1, titere2, gesto2, pase_secuencia2, pase_desempeno2, 
    gol2, rebote2, control_secuencia2, control_desempeno2, informo2, f_c_parcial2, titere3, gesto3, pase_secuencia3, pase_desempeno3, gol3, rebote3, 
    control_secuencia3, control_desempeno3, informo3, f_c_parcial3, titere4, gesto4, pase_secuencia4, pase_desempeno4, gol4, rebote4, control_secuencia4, 
    control_desempeno4, informo4, f_c_parcial4, titere5, gesto5, pase_secuencia5, pase_desempeno5, gol5, rebote5, control_secuencia5, control_desempeno5, 
    informo5, f_c_parcial5, titere6, gesto6, pase_secuencia6, pase_desempeno6, gol6, rebote6, control_secuencia6, control_desempeno6, informo6, f_c_parcial6, 
    titere7, gesto7, pase_secuencia7, pase_desempeno7, gol7, rebote7, control_secuencia7, control_desempeno7, informo7, f_c_parcial7, titere8, gesto8, 
    pase_secuencia8, pase_desempeno8, gol8, rebote8, control_secuencia8, control_desempeno8, informo8, f_c_parcial8, titere9, gesto9, pase_secuencia9, 
    pase_desempeno9, gol9, rebote9, control_secuencia9, control_desempeno9, informo9, f_c_parcial9, titere10, gesto10, pase_secuencia10, pase_desempeno10, 
    gol10, rebote10, control_secuencia10, control_desempeno10, informo10, f_c_parcial10, titere11, gesto11, pase_secuencia11, pase_desempeno11, gol11, 
    rebote11, control_secuencia11, control_desempeno11, informo11, f_c_parcial11, titere12, gesto12, pase_secuencia12, pase_desempeno12, gol12, rebote12, 
    control_secuencia12, control_desempeno12, informo12, f_c_parcial12, titere13, gesto13, pase_secuencia13, pase_desempeno13, gol13, rebote13, 
    control_secuencia13, control_desempeno13, informo13, f_c_parcial13, titere14, gesto14, pase_secuencia14, pase_desempeno14, gol14, rebote14, 
    control_secuencia14, control_desempeno14, informo14, f_c_parcial14, titere15, gesto15, pase_secuencia15, pase_desempeno15, gol15, rebote15, 
    control_secuencia15, control_desempeno15, informo15, f_c_parcial15 from prueba inner JOIN usuarios on prueba.num_docu = usuarios.num_docu";
    $resultado=metodoGet($query);
    echo json_encode($resultado->fetchAll()); 
   
    exit();
}


if($_POST['METHOD']=='TEST'){
    unset($_POST['METHOD']);
    
    $num_docu = $_POST['num_docu'];
    $fecha_prueba = $_POST['fecha_prueba'];
    $fecha_prueba = date('Y-m-d H:i:s');

    $titere1 = $_POST['titere1'];
    $gesto1 = $_POST['gesto1'];
    $pase_secuencia1 = $_POST['pase_secuencia1'];
    $pase_desempeno1 =$_POST['pase_desempeno1'];
    $gol1 = $_POST['gol1'];
    $rebote1 = $_POST['rebote1'];
    $control_secuencia1 = $_POST['control_secuencia1'];
    $control_desempeno1 =$_POST['control_desempeno1'];
    $informo1 = $_POST['informo1'];
    $f_c_parcial1 = $_POST['f_c_parcial1'];

    $titere2 = $_POST['titere2'];
    $gesto2 = $_POST['gesto2'];
    $pase_secuencia2 = $_POST['pase_secuencia2'];
    $pase_desempeno2 =$_POST['pase_desempeno2'];
    $gol2 = $_POST['gol2'];
    $rebote3 = $_POST['rebote3'];
    $control_secuencia2 = $_POST['control_secuencia2'];
    $control_desempeno2 =$_POST['control_desempeno2'];
    $informo2 = $_POST['informo2'];
    $f_c_parcial2 = $_POST['f_c_parcial2'];

    $titere3 = $_POST['titere3'];
    $gesto3 = $_POST['gesto3'];
    $pase_secuencia3 = $_POST['pase_secuencia3'];
    $pase_desempeno3 =$_POST['pase_desempeno3'];
    $gol3 = $_POST['gol3'];
    $rebote3 = $_POST['rebote3'];
    $control_secuencia3 = $_POST['control_secuencia3'];
    $control_desempeno3 =$_POST['control_desempeno3'];
    $informo3 = $_POST['informo3'];
    $f_c_parcial3 = $_POST['f_c_parcial3'];

    $titere4 = $_POST['titere4'];
    $gesto4 = $_POST['gesto4'];
    $pase_secuencia4 = $_POST['pase_secuencia4'];
    $pase_desempeno4 =$_POST['pase_desempeno4'];
    $gol4 = $_POST['gol4'];
    $rebote4 = $_POST['rebote4'];
    $control_secuencia4 = $_POST['control_secuencia4'];
    $control_desempeno4 =$_POST['control_desempeno4'];
    $informo4 = $_POST['informo4'];
    $f_c_parcial4 = $_POST['f_c_parcial4'];

    $titere5 = $_POST['titere5'];
    $gesto5 = $_POST['gesto5'];
    $pase_secuencia5 = $_POST['pase_secuencia5'];
    $pase_desempeno5 =$_POST['pase_desempeno5'];
    $gol5 = $_POST['gol5'];
    $rebote5 = $_POST['rebote5'];
    $control_secuencia5 = $_POST['control_secuencia5'];
    $control_desempeno5 =$_POST['control_desempeno5'];
    $informo5 = $_POST['informo5'];
    $f_c_parcial5 = $_POST['f_c_parcial5'];

    $titere6 = $_POST['titere6'];
    $gesto6 = $_POST['gesto6'];
    $pase_secuencia6 = $_POST['pase_secuencia6'];
    $pase_desempeno6 =$_POST['pase_desempeno6'];
    $gol6 = $_POST['gol6'];
    $rebote6 = $_POST['rebote6'];
    $control_secuencia6 = $_POST['control_secuencia6'];
    $control_desempeno6 =$_POST['control_desempeno6'];
    $informo6 = $_POST['informo6'];
    $f_c_parcial6 = $_POST['f_c_parcial6'];

    $titere7 = $_POST['titere7'];
    $gesto7 = $_POST['gesto7'];
    $pase_secuencia7 = $_POST['pase_secuencia7'];
    $pase_desempeno7 =$_POST['pase_desempeno7'];
    $gol7 = $_POST['gol7'];
    $rebote7 = $_POST['rebote7'];
    $control_secuencia7= $_POST['control_secuencia7'];
    $control_desempeno7 =$_POST['control_desempeno7'];
    $informo7 = $_POST['informo7'];
    $f_c_parcial7 = $_POST['f_c_parcial7'];

    $titere8 = $_POST['titere8'];
    $gesto8 = $_POST['gesto8'];
    $pase_secuencia8 = $_POST['pase_secuencia8'];
    $pase_desempeno8 =$_POST['pase_desempeno8'];
    $gol8 = $_POST['gol8'];
    $rebote8 = $_POST['rebote8'];
    $control_secuencia8 = $_POST['control_secuencia8'];
    $control_desempeno8 =$_POST['control_desempeno8'];
    $informo8 = $_POST['informo8'];
    $f_c_parcial8 = $_POST['f_c_parcial8'];

    $titere9 = $_POST['titere9'];
    $gesto9 = $_POST['gesto9'];
    $pase_secuencia9 = $_POST['pase_secuencia9'];
    $pase_desempeno9 =$_POST['pase_desempeno9'];
    $gol9 = $_POST['gol9'];
    $rebote9 = $_POST['rebote9'];
    $control_secuencia9 = $_POST['control_secuencia9'];
    $control_desempeno9 =$_POST['control_desempeno9'];
    $informo9 = $_POST['informo9'];
    $f_c_parcial9 = $_POST['f_c_parcial9'];

    $titere8 = $_POST['titere8'];
    $gesto8 = $_POST['gesto8'];
    $pase_secuencia8 = $_POST['pase_secuencia8'];
    $pase_desempeno8 =$_POST['pase_desempeno8'];
    $gol8 = $_POST['gol8'];
    $rebote8 = $_POST['rebote8'];
    $control_secuencia8 = $_POST['control_secuencia8'];
    $control_desempeno8 =$_POST['control_desempeno8'];
    $informo8 = $_POST['informo8'];
    $f_c_parcial8 = $_POST['f_c_parcial8'];

    $titere10 = $_POST['titere10'];
    $gesto10 = $_POST['gesto10'];
    $pase_secuencia10 = $_POST['pase_secuencia10'];
    $pase_desempeno10 =$_POST['pase_desempeno10'];
    $gol10 = $_POST['gol10'];
    $rebote10 = $_POST['rebote10'];
    $control_secuencia10 = $_POST['control_secuencia10'];
    $control_desempeno10 =$_POST['control_desempeno10'];
    $informo10 = $_POST['informo10'];
    $f_c_parcial10 = $_POST['f_c_parcial10'];

    $titere11 = $_POST['titere11'];
    $gesto11 = $_POST['gesto11'];
    $pase_secuencia11 = $_POST['pase_secuencia11'];
    $pase_desempeno11 =$_POST['pase_desempeno11'];
    $gol11 = $_POST['gol11'];
    $rebote11 = $_POST['rebote11'];
    $control_secuencia11 = $_POST['control_secuencia11'];
    $control_desempeno11 =$_POST['control_desempeno11'];
    $informo11 = $_POST['informo11'];
    $f_c_parcial11 = $_POST['f_c_parcial11'];

    $titere12 = $_POST['titere12'];
    $gesto12 = $_POST['gesto12'];
    $pase_secuencia12 = $_POST['pase_secuencia12'];
    $pase_desempeno12 =$_POST['pase_desempeno12'];
    $gol12 = $_POST['gol12'];
    $rebote12 = $_POST['rebote12'];
    $control_secuencia12 = $_POST['control_secuencia12'];
    $control_desempeno12 =$_POST['control_desempeno12'];
    $informo12 = $_POST['informo12'];
    $f_c_parcial12 = $_POST['f_c_parcial12'];

    $titere13 = $_POST['titere13'];
    $gesto13 = $_POST['gesto13'];
    $pase_secuencia13 = $_POST['pase_secuencia13'];
    $pase_desempeno13 =$_POST['pase_desempeno13'];
    $gol13 = $_POST['gol13'];
    $rebote13 = $_POST['rebote13'];
    $control_secuencia13 = $_POST['control_secuencia13'];
    $control_desempeno13 =$_POST['control_desempeno13'];
    $informo13 = $_POST['informo13'];
    $f_c_parcial13 = $_POST['f_c_parcial13'];

    $titere14 = $_POST['titere14'];
    $gesto14 = $_POST['gesto14'];
    $pase_secuencia14 = $_POST['pase_secuencia14'];
    $pase_desempeno14 =$_POST['pase_desempeno14'];
    $gol14 = $_POST['gol14'];
    $rebote14 = $_POST['rebote14'];
    $control_secuencia14 = $_POST['control_secuencia14'];
    $control_desempeno14 =$_POST['control_desempeno14'];
    $informo14 = $_POST['informo14'];
    $f_c_parcial14 = $_POST['f_c_parcial14'];

    $titere15 = $_POST['titere15'];
    $gesto15 = $_POST['gesto15'];
    $pase_secuencia15 = $_POST['pase_secuencia15'];
    $pase_desempeno15 =$_POST['pase_desempeno15'];
    $gol15 = $_POST['gol15'];
    $rebote15 = $_POST['rebote15'];
    $control_secuencia15 = $_POST['control_secuencia15'];
    $control_desempeno15 =$_POST['control_desempeno15'];
    $informo15 = $_POST['informo15'];
    $f_c_parcial15 = $_POST['f_c_parcial15'];

    

    $query="
    INSERT INTO `prueba` 
    (`id_prueba`, `num_docu`,`fecha_prueba`, 
    `titere1`, `gesto1`, `pase_secuencia1`, `pase_desempeno1`, `gol1`, `rebote1`, `control_secuencia1`, `control_desempeno1`, `informo1`, `f_c_parcial1`, 
    `titere2`, `gesto2`, `pase_secuencia2`, `pase_desempeno2`, `gol2`, `rebote2`, `control_secuencia2`, `control_desempeno2`, `informo2`, `f_c_parcial2`, 
    `titere3`, `gesto3`, `pase_secuencia3`, `pase_desempeno3`, `gol3`, `rebote3`, `control_secuencia3`, `control_desempeno3`, `informo3`, `f_c_parcial3`, 
    `titere4`, `gesto4`, `pase_secuencia4`, `pase_desempeno4`, `gol4`, `rebote4`, `control_secuencia4`, `control_desempeno4`, `informo4`, `f_c_parcial4`, 
    `titere5`, `gesto5`, `pase_secuencia5`, `pase_desempeno5`, `gol5`, `rebote5`, `control_secuencia5`, `control_desempeno5`, `informo5`, `f_c_parcial5`, 
    `titere6`, `gesto6`, `pase_secuencia6`, `pase_desempeno6`, `gol6`, `rebote6`, `control_secuencia6`, `control_desempeno6`, `informo6`, `f_c_parcial6`, 
    `titere7`, `gesto7`, `pase_secuencia7`, `pase_desempeno7`, `gol7`, `rebote7`, `control_secuencia7`, `control_desempeno7`, `informo7`, `f_c_parcial7`, 
    `titere8`, `gesto8`, `pase_secuencia8`, `pase_desempeno8`, `gol8`, `rebote8`, `control_secuencia8`, `control_desempeno8`, `informo8`, `f_c_parcial8`, 
    `titere9`, `gesto9`, `pase_secuencia9`, `pase_desempeno9`, `gol9`, `rebote9`, `control_secuencia9`, `control_desempeno9`, `informo9`, `f_c_parcial9`, 
    `titere10`, `gesto10`, `pase_secuencia10`, `pase_desempeno10`, `gol10`, `rebote10`, `control_secuencia10`, `control_desempeno10`, `informo10`, `f_c_parcial10`, 
    `titere11`, `gesto11`, `pase_secuencia11`, `pase_desempeno11`, `gol11`, `rebote11`, `control_secuencia11`, `control_desempeno11`, `informo11`, `f_c_parcial11`, 
    `titere12`, `gesto12`, `pase_secuencia12`, `pase_desempeno12`, `gol12`, `rebote12`, `control_secuencia12`, `control_desempeno12`, `informo12`, `f_c_parcial12`, 
    `titere13`, `gesto13`, `pase_secuencia13`, `pase_desempeno13`, `gol13`, `rebote13`, `control_secuencia13`, `control_desempeno13`, `informo13`, `f_c_parcial13`, 
    `titere14`, `gesto14`, `pase_secuencia14`, `pase_desempeno14`, `gol14`, `rebote14`, `control_secuencia14`, `control_desempeno14`, `informo14`, `f_c_parcial14`, 
    `titere15`, `gesto15`, `pase_secuencia15`, `pase_desempeno15`, `gol15`, `rebote15`, `control_secuencia15`, `control_desempeno15`, `informo15`, `f_c_parcial15`) 
    
    VALUES 
    (NULL, '$num_docu','$fecha_prueba',
    '$titere1', '$gesto1', '$pase_secuencia1', '$pase_desempeno1', '$gol1', '$rebote1', '$control_secuencia1', '$control_secuencia1', '$informo1', '$f_c_parcial1',
    '$titere2', '$gesto2', '$pase_secuencia2', '$pase_desempeno2', '$gol2', '$rebote2', '$control_secuencia2', '$control_secuencia2', '$informo2', '$f_c_parcial2',
    '$titere3', '$gesto3', '$pase_secuencia3', '$pase_desempeno3', '$gol3', '$rebote3', '$control_secuencia3', '$control_secuencia3', '$informo3', '$f_c_parcial3',
    '$titere4', '$gesto4', '$pase_secuencia4', '$pase_desempeno4', '$gol4', '$rebote4', '$control_secuencia4', '$control_secuencia4', '$informo4', '$f_c_parcial4',
    '$titere5', '$gesto5', '$pase_secuencia5', '$pase_desempeno5', '$gol5', '$rebote5', '$control_secuencia5', '$control_secuencia5', '$informo5', '$f_c_parcial5',
    '$titere6', '$gesto6', '$pase_secuencia6', '$pase_desempeno6', '$gol6', '$rebote6', '$control_secuencia6', '$control_secuencia6', '$informo6', '$f_c_parcial6',
    '$titere7', '$gesto7', '$pase_secuencia7', '$pase_desempeno7', '$gol7', '$rebote7', '$control_secuencia7', '$control_secuencia7', '$informo7', '$f_c_parcial7',
    '$titere8', '$gesto8', '$pase_secuencia8', '$pase_desempeno8', '$gol8', '$rebote8', '$control_secuencia8', '$control_secuencia8', '$informo8', '$f_c_parcial8',
    '$titere9', '$gesto9', '$pase_secuencia9', '$pase_desempeno9', '$gol9', '$rebote9', '$control_secuencia9', '$control_secuencia9', '$informo9', '$f_c_parcial9',
    '$titere10', '$gesto10', '$pase_secuencia10', '$pase_desempeno10', '$gol10', '$rebote10', '$control_secuencia10', '$control_secuencia10', '$informo10', '$f_c_parcial10',
    '$titere11', '$gesto11', '$pase_secuencia11', '$pase_desempeno11', '$gol11', '$rebote11', '$control_secuencia11', '$control_secuencia11', '$informo11', '$f_c_parcial11',
    '$titere12', '$gesto12', '$pase_secuencia12', '$pase_desempeno12', '$gol12', '$rebote12', '$control_secuencia12', '$control_secuencia12', '$informo12', '$f_c_parcial12',
    '$titere13', '$gesto13', '$pase_secuencia13', '$pase_desempeno13', '$gol13', '$rebote13', '$control_secuencia13', '$control_secuencia13', '$informo13', '$f_c_parcial13',
    '$titere14', '$gesto14', '$pase_secuencia14', '$pase_desempeno14', '$gol14', '$rebote14', '$control_secuencia14', '$control_secuencia14', '$informo14', '$f_c_parcial14',
    '$titere15', '$gesto15', '$pase_secuencia15', '$pase_desempeno15', '$gol15', '$rebote15', '$control_secuencia15', '$control_secuencia15', '$informo15', '$f_c_parcial15');";

    $queryAutoIncrement="select MAX(id_prueba) as id_prueba from frameworks";
    $resultado=metodoPost($query, $queryAutoIncrement);
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