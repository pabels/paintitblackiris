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

    


if(isset($_POST['name']) && $_POST['name']!="" && isset($_POST['email']) && isset($_POST['message']) && $_POST['message']!=""){

        $email=$_POST['email'];
        $cuerpo="Mensaje del usuario: <b>$_POST[name]</b> con email: $_POST[email]."."<br>".$_POST['message'];

        if(is_email($email)){
        send_mail($email,$cuerpo);
        header('Refresh: 3; ../client/contact.html');
        echo 'Se ha enviado el mensaje correctamente.';
        }
        else{ 
            echo 'Escribe un correo valido.<br><a href=../client/contact.html>Volver</a>';
        } 
    }
    else{
        echo 'Rellena todos los campos con * <br><a href=../client/contact.html>Volver</a>';
    }

?>