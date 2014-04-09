<?php

$uploadedfileload="true";
$msg="";
$uploadedfile_size=$_FILES['uploadedfile']['size'];

if ($_FILES['uploadedfile']['size']>20000000){
	$msg=$msg."El archivo es demasiado pesado, debes reduzcirlo antes de subirlo<br>";
	$uploadedfileload="false";
}

if (!($_FILES['uploadedfile']['type'] =="image/jpeg" OR $_FILES['uploadedfile']['type'] =="image/gif")){
	$msg=$msg." Tu archivo tiene que ser JPG o GIF. Otros archivos no son permitidos<br>";
	$uploadedfileload="false";
}

$file_name=$_FILES['uploadedfile']['name'];
$add="uploaded/$file_name";
if($uploadedfileload=="true"){

	if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $add)){
		echo $_FILES['uploadedfile']['name'].'<br>';
		echo " Ha sido subido satisfactoriamente";
		/*define("Servidor","localhost");
        define("User","root");
        define("Pass","");
        $conexion=mysql_connect(Servidor,User,Pass) or die ("Error");
        mysql_select_db("black",$conexion);
        $query="insert into coches values('$file_name',0)";
        mysql_query($query,$conexion);
        mysql_close($conexion);*/
		header('Refresh: 3; ../client/index.html#/tools');
	}else{
		echo "Error al subir el archivo";
	}

}else{
	echo $msg.'<br>';
	echo "<a href=../client/index.html#/tools>Atras</a>";
}

?>
