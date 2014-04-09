<?php

require "./lib/PHPMailerAutoload.php";
include("./lib/class.phpmailer.php");
include("./lib/class.smtp.php");

function send_mail($mail_register, $cuerpo) {
    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    $mail->Username = "webpaintitblack@gmail.com";
    $mail->Password = "paintitblack123456";


    $mail->From = "webpaintitblack@gmail.com";
    $mail->FromName = "PaintItBlack";

    $mail->addAddress($mail_register);
    $mail->WordWrap = 50;
    $mail->isHTML(true);
    $mail->Subject = "Mensaje";
    $mail->Body = $cuerpo;
    $mail->AltBody = "This is the body in plain text for non-HTML mail clients";

    if (!$mail->send()) {
        echo "Message could not be sent.";
        echo "Mailer Error: " . $mail->ErrorInfo;
        return false;
    }
    return true;
}

function is_email($cadena){
        if (preg_match('/^[A-Za-z0-9-_.+%]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/', $cadena)) {
        return true;
        } else {
        return false;
        }
}

function checkuser($username, $userpass){

    define("Servidor","localhost");
    define("User","root");
    define("Pass","");
    $conexion=mysql_connect(Servidor,User,Pass) or die ("Error");
    mysql_select_db("black",$conexion);
    $query="select name from user where name=$username and pass=$userpass";
    $res=mysql_query($query,$conexion);
    mysql_close($conexion);
    if($res==false){
        return false;
    }else{
        return true;
    }
}


if(isset($_POST['name']) && $_POST['name']!="" && isset($_POST['email']) && isset($_POST['message']) && $_POST['message']!=""){
    $username=$_POST['name'];
    $userpass=$_POST['password'];
    $email=$_POST['email'];
    $cuerpo="Mensaje del usuario: <b>$_POST[name]</b> con email: $_POST[email]."."<br>".$_POST['message'];

    if(is_email($email) && checkuser($username, $userpass)){
    send_mail($email,$cuerpo);
    header('Refresh: 3; ../client/index.html#/contact');
    echo 'Se ha enviado el mensaje correctamente.';
    }
    else{ 
        echo 'Usuario o contraseña incorrecto.<br><a href=../client/index.html#/contact>Volver</a>';
    } 
}
else{
    echo 'Rellena todos los campos con * <br><a href=../client/index.html#/contact>Volver</a>';
}

?>