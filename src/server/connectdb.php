<?php

    function enviar($nombre,$password,$email){

        define("Servidor","127.11.174.130:3306");
        define("User","admintjegPEX");
        define("Pass","uZr93IWebeVY");
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

    if(isset($_POST['nombre']) && $_POST['nombre']!="" && isset($_POST['password']) && $_POST['password']!="" && isset($_POST['email'])){

        $nombre=$_POST['nombre'];
        $password=$_POST['password'];
        $email=$_POST['email'];

        if(is_email($email)){
        enviar($nombre,$password,$email);
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