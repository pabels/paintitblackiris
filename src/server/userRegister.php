<?php

    function registrar($nombre,$password,$email){

        define("Servidor","localhost");
        define("User","root");
        define("Pass","");
        $conexion=mysql_connect(Servidor,User,Pass) or die ("Error, algo no ha ido bien");
        mysql_select_db("black",$conexion);
        $query="insert into user values("."'".$nombre."', "."'".$password."', "."'".$email."',0)";
        mysql_query($query,$conexion);
        mysql_close($conexion);

    }

    function is_email($cadena){
        if (preg_match('/^[A-Za-z0-9-_.+%]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/', $cadena)) {
        return true;
        } else {
        return false;
        }
    }

    if(isset($_POST['name']) && $_POST['name']!="" && isset($_POST['pass']) && $_POST['pass']!="" && isset($_POST['mail'])){

        $nombre=$_POST['name'];
        $password=$_POST['pass'];
        $email=$_POST['mail'];

        if(is_email($email)){
        registrar($nombre,$password,$email);
        header('Refresh: 3; ../client/registro.html');
        echo 'Se ha registrado correctamente';
        }
        else{ 
            echo 'Escribe un correo valido.<br><a href=../client/registro.html>Volver</a>';
        } 
    }
    else{
        echo 'Rellena todos los campos con * <br><a href=../client/registro.html>Volver</a>';
    }

?>