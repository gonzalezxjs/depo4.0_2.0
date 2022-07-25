
CREATE DATABASE deportes_40;
USE deportes_40;


--   ---------- Géneros ------------       --
CREATE TABLE generos( id_genero int not null, primary key(id_genero), nom_genero varchar(20) not null);

INSERT INTO `deportes_40`.`generos`(`id_genero`,`nom_genero`) VALUES ("1","Masculino");
INSERT INTO `deportes_40`.`generos`(`id_genero`,`nom_genero`) VALUES ("2","Femenino");
INSERT INTO `deportes_40`.`generos`(`id_genero`,`nom_genero`) VALUES ("3","No binario");
 --        ---------- ------------         --
 
 
--     ----- Tipos de sangre -----         --
CREATE TABLE tipos_sangre( id_sangre int not null, primary key(id_sangre), nom_sangre varchar(5) not null);

INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("1","A+");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("2","O+");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("3","B+");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("4","AB+");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("5","A-");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("6","O-");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("7","B-");
INSERT INTO `deportes_40`.`tipos_sangre`(`id_sangre`,`nom_sangre`) VALUES ("8","AB-");
 --        ---------- ------------         --
 
 
--     ----------- Roles ------------      --
CREATE TABLE roles(id_rol int not null, primary key(id_rol), nom_rol varchar(25) not null);

INSERT INTO `deportes_40`.`roles`(`id_rol`,`nom_rol`) VALUES ("1","Administrador");
INSERT INTO `deportes_40`.`roles`(`id_rol`,`nom_rol`) VALUES ("2","Moderador");
INSERT INTO `deportes_40`.`roles`(`id_rol`,`nom_rol`) VALUES ("3","Aprendiz");
INSERT INTO `deportes_40`.`roles`(`id_rol`,`nom_rol`) VALUES ("4","Psicólogo");
 --        ---------- ------------         --
 
 
 --         ----------- Tipo de documento ------------         --
CREATE TABLE tipos_documento(id_documento int not null, primary key(id_documento), nom_documento varchar(30) not null);
 
INSERT INTO `deportes_40`.`tipos_documento`(`id_documento`,`nom_documento`) VALUES ("1","C.C");
INSERT INTO `deportes_40`.`tipos_documento`(`id_documento`,`nom_documento`) VALUES ("2","T.I");
INSERT INTO `deportes_40`.`tipos_documento`(`id_documento`,`nom_documento`) VALUES ("3","Cédula de extranjería");
INSERT INTO `deportes_40`.`tipos_documento`(`id_documento`,`nom_documento`) VALUES ("4","Pasaporte");
--         ---------- ------------         --
 
 
--       ----------- Estados ------------            --
CREATE TABLE estados(id_estado int not null, primary key(id_estado), nom_estado varchar(15) not null);

INSERT INTO `deportes_40`.`estados`(`id_estado`,`nom_estado`) VALUES ("1","Habilitado");
INSERT INTO `deportes_40`.`estados`(`id_estado`,`nom_estado`) VALUES ("2","Inhabilitado");
--           ---------- ----------         --


--       ----------- Usuarios ------------           --
CREATE TABLE usuarios(id_usu int not null auto_increment , primary key(id_usu), nom1_usu varchar(20) not null, nom2_usu varchar(20), 
ape1_usu varchar(20) not null, ape2_usu varchar(20), fecha_nac_usu date, correo_usu varchar(80) not null, contrasena_usu varchar(30),
num_docu varchar(15) not null,
id_estado int null, foreign key(id_estado) references estados(id_estado),
id_documento int null , foreign key(id_documento) references tipos_documento(id_documento),
id_genero int not null, foreign key (id_genero) references generos(id_genero),
id_rol int not null, foreign key (id_rol) references roles(id_rol),
id_sangre int not null, foreign key (id_sangre) references tipos_sangre(id_sangre));

INSERT INTO `usuarios` (`id_usu`, `nom1_usu`, `nom2_usu`, `ape1_usu`, `ape2_usu`, `fecha_nac_usu`, `correo_usu`, `contrasena_usu`, 
`num_docu`, `id_estado`, `id_documento`, `id_genero`, `id_rol`, `id_sangre`) VALUES ('1', 'Juan', NULL, 'P.', 'González', '2002-12-18', 'juacillo18@gmail.com', '1234', 
'1006326446', '1', NULL, '1', '1', '2');


# 											Consulta de usuario
/*LECT usuarios.nom1_usu, usuarios.ape1_usu, usuarios.ape2_usu, tipos_documento.nom_documento, usuarios.num_docu, 
usuarios.correo_usu, estados.nom_estado, roles.nom_rol, departamentos.nom_dept, ciudades.nom_ciudad
FROM usuarios 
INNER JOIN  tipos_documento ON tipos_documento.id_documento = usuarios.id_documento
INNER JOIN estados ON estados.id_estado = usuarios.id_estado
INNER JOIN roles ON roles.id_rol = usuarios.id_rol
INNER JOIN ciudades ON ciudades.id_ciudad = usuarios.id_ciudad
INNER JOIN departamentos ON departamentos.id_dept = ciudades.id_dept;*/

select * from usuarios;


-- ----------------- Test ----------------------

create table prueba(id_prueba int not null auto_increment, primary key(id_prueba), 
  num_docu int not null,fecha_prueba datetime not null,
  titere1 int, gesto1 int, pase_secuencia1 varchar(12), pase_desempeno1 varchar(10), gol1 varchar(3), 
  rebote1 varchar(3), control_secuencia1 varchar(10), control_desempeno1 varchar(10), informo1 varchar(3), f_c_parcial1 int,
  titere2 int, gesto2 int, pase_secuencia2 varchar(12), pase_desempeno2 varchar(10), gol2 varchar(3), 
  rebote2 varchar(3), control_secuencia2 varchar(10), control_desempeno2 varchar(10), informo2 varchar(3), f_c_parcial2 int,
  titere3 int, gesto3 int, pase_secuencia3 varchar(12), pase_desempeno3 varchar(10), gol3 varchar(3), 
  rebote3 varchar(3), control_secuencia3 varchar(10), control_desempeno3 varchar(10), informo3 varchar(3), f_c_parcial3 int,
  titere4 int, gesto4 int, pase_secuencia4 varchar(12), pase_desempeno4 varchar(10), gol4 varchar(3), 
  rebote4 varchar(3), control_secuencia4 varchar(10), control_desempeno4 varchar(10), informo4 varchar(3), f_c_parcial4 int,
  titere5 int, gesto5 int, pase_secuencia5 varchar(12), pase_desempeno5 varchar(10), gol5 varchar(3), 
  rebote5 varchar(3), control_secuencia5 varchar(10), control_desempeno5 varchar(10), informo5 varchar(3), f_c_parcial5 int,
  titere6 int, gesto6 int, pase_secuencia6 varchar(12), pase_desempeno6 varchar(10), gol6 varchar(3), 
  rebote6 varchar(3), control_secuencia6 varchar(10), control_desempeno6 varchar(10), informo6 varchar(3), f_c_parcial6 int,
  titere7 int, gesto7 int, pase_secuencia7 varchar(12), pase_desempeno7 varchar(10), gol7 varchar(3), 
  rebote7 varchar(3), control_secuencia7 varchar(10), control_desempeno7 varchar(10), informo7 varchar(3), f_c_parcial7 int,
  titere8 int, gesto8 int, pase_secuencia8 varchar(12), pase_desempeno8 varchar(10), gol8 varchar(3), 
  rebote8 varchar(3), control_secuencia8 varchar(10), control_desempeno8 varchar(10), informo8 varchar(3), f_c_parcial8 int,
  titere9 int, gesto9 int, pase_secuencia9 varchar(12), pase_desempeno9 varchar(10), gol9 varchar(3), 
  rebote9 varchar(3), control_secuencia9 varchar(10), control_desempeno9 varchar(10), informo9 varchar(3), f_c_parcial9 int,
  titere10 int, gesto10 int, pase_secuencia10 varchar(12), pase_desempeno10 varchar(10), gol10 varchar(3), 
  rebote10 varchar(3), control_secuencia10 varchar(10), control_desempeno10 varchar(10), informo10 varchar(3), f_c_parcial10 int,
  titere11 int, gesto11 int, pase_secuencia11 varchar(12), pase_desempeno11 varchar(10), gol11 varchar(3), 
  rebote11 varchar(3), control_secuencia11 varchar(10), control_desempeno11 varchar(10), informo11 varchar(3), f_c_parcial11 int,
  titere12 int, gesto12 int, pase_secuencia12 varchar(12), pase_desempeno12 varchar(10), gol12 varchar(3), 
  rebote12 varchar(3), control_secuencia12 varchar(10), control_desempeno12 varchar(10), informo12 varchar(3), f_c_parcial12 int,
  titere13 int, gesto13 int, pase_secuencia13 varchar(12), pase_desempeno13 varchar(10), gol13 varchar(3), 
  rebote13 varchar(3), control_secuencia13 varchar(10), control_desempeno13 varchar(10), informo13 varchar(3), f_c_parcial13 int,
  titere14 int, gesto14 int, pase_secuencia14 varchar(12), pase_desempeno14 varchar(10), gol14 varchar(3), 
  rebote14 varchar(3), control_secuencia14 varchar(10), control_desempeno14 varchar(10), informo14 varchar(3), f_c_parcial14 int,
  titere15 int, gesto15 int, pase_secuencia15 varchar(12), pase_desempeno15 varchar(10), gol15 varchar(3), 
  rebote15 varchar(3), control_secuencia15 varchar(10), control_desempeno15 varchar(10), informo15 varchar(3), f_c_parcial15 int
  );


/* Consulta de resultados */

/*SELECT prueba.num_docu, usuarios.nom1_usu, usuarios.nom2_usu, usuarios.ape1_usu, usuarios.ape2_usu, titere1, gesto1, pase_secuencia1, 
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
control_secuencia15, control_desempeno15, informo15, f_c_parcial15 from prueba inner JOIN usuarios on prueba.num_docu = usuarios.num_docu 
where prueba.num_docu = 1006326446; */

  
  
  
  
      






 
 
