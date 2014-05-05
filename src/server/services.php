<?php	
	require_once("lib/PHPMailerAutoload.php");
	include("lib/class.phpmailer.php");
	include("lib/class.smtp.php");


	function RegisterUser()
    {

        header('Content-Type: application/json');
        include("conect.php");
    	$enlace =  mysql_connect($hostBD, $userBD, $passBD);
		$query=mysql_query('create database if not exists usersb',$enlace);
		mysql_select_db("usersb",$enlace);
        $users = 'CREATE TABLE if not exists usuarios (
          id int(11) NOT NULL auto_increment,
          name varchar(255) NOT NULL,
          user varchar(255) NOT NULL,
          mail varchar(255) NOT NULL,
          pass varchar(255) NOT NULL,
          code varchar(255) NOT NULL,
          PRIMARY KEY  (id)
        )';
        mysql_query($users,$enlace);
		$sql = "SELECT COUNT(*) FROM usuarios where user='$_REQUEST[user]' OR mail='$_REQUEST[mail]'";
		$rec = mysql_query($sql,$enlace);
		while ($res=mysql_fetch_array($rec)) {
			$cont= $res['COUNT(*)'];
		}
        if($cont == 0)
        {
        	$pass=md5($_REQUEST['pass']);
        	$code=md5(createRandomCode());
        	//if(SendUserConfirmationEmail($_REQUEST['name'],$_REQUEST['mail'],$code)){
				$sql = "INSERT INTO usuarios (name,user,mail,pass,code) VALUES ('$_REQUEST[name]','$_REQUEST[user]','$_REQUEST[mail]','$pass','$code')";
            	$rec = mysql_query($sql,$enlace);
				$result = array("msg"=>"registro exitoso", "user"=>"$_REQUEST[user]");
            echo json_encode($result);
       		//}
       		//else
       		//{
       			//echo 'ERROR: error al enviar confirmacion';
       		//}
        }
        else{
        	 echo "ya existe ese usuario";
        }
    }

    function createRandomCode() { 
	    $chars = "abcdefghijkmnopqrstuvwxyz023456789"; 
	    srand((double)microtime()*1000000); 
	    $i = 0; 
	    $pass = '' ; 

	    while ($i <= 7) { 
	        $num = rand() % 33; 
	        $tmp = substr($chars, $num, 1); 
	        $pass = $pass . $tmp; 
	        $i++; 
	    } 

	    return $pass; 

	}

    function SendUserConfirmationEmail($name,$email,$code)
    {
        $mail = new PHPMailer();

		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "ssl";
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465;
		$mail->Username = "webpaintitblack@gmail.com";
		$mail->Password = "paintitblack123456";
		$mail->From = "webpaintitblack@gmail.com";
		$mail->FromName = "Paintitblack";
		$mail->addAddress($email);
		$mail->Subject = "Tu Registro con Paint it Black";
		$mail->Body ="Hola ".$name."\r\n\r\n".
		"Gracias por tu Registración con Paint it Black\r\n"."\r\n GRACIAS!!";

		if (!$mail->send()) {
	        echo "Error Mailer: " . $mail->ErrorInfo;
	        return false;
	    }
		return true;
    }

    function ConfirmUser($code)
    {
        if(empty($code))
        {
            echo 'codigo no valido';
        }
        else
        {
        	include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
			$query=mysql_query('create database if not exists usersb',$enlace);
			mysql_select_db("usersb",$enlace);
			$sql = "UPDATE usuarios SET code='y' WHERE code='$code'";
			$rec = mysql_query($sql,$enlace);
        }	
    } 

    function LoginUser()
    {

        header('Content-Type: application/json');

    	include("conect.php");
        
        $enlace =  mysql_connect($hostBD, $userBD, $passBD);
		mysql_select_db("usersb",$enlace);

    
    	$username = trim($_REQUEST['loginUser']);
    	$password = trim($_REQUEST['loginPass']);
    	$pass = md5($password);
    	$sql = "select * from usuarios where user='$username'";
    	if(mysql_query($sql,$enlace)===false){
           echo 'ERROR: usuario no encontrado';
           
        }else{
             $rec = mysql_query($sql,$enlace);
            while ($res=mysql_fetch_assoc($rec)) {
                $resPass= $res['pass'];
              
            }
        }
    	if(empty($resPass)){
            $resPass=0; 
        }
        if($pass===$resPass){
            session_start();
    		$_SESSION['loginUser'] = $username;
            $result = array("msg"=>"login exitoso", "user"=>"$_SESSION[loginUser]");
            echo json_encode($result);
        }
        else{
            header('HTTP/1.1 401 Unauthorized', true, 401);
        }
       mysql_close($enlace);  
    }

    function LogOut()
    {
        header('Content-Type: application/json');
    	session_start();
        $_SESSION['loginUser']=NULL;
        unset($_SESSION['loginUser']);
        $result = array("msg"=>"logout exitoso", "user"=>" $_SESSION[loginUser]");
            echo json_encode($result);

    }

    function checkLogin()
    {
    	session_start();
       	if(isset($_SESSION['user']) && $_SESSION['user']!=""){
       		echo $_SESSION['user'];
       	}
    }

    

    

    

    

    function subirArchivo () {
        if (isset($_FILES['archivo'])) {
            $archivo = $_FILES['archivo'];
            $extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
            $time = time();
            $nombre = "{$_POST['nombre_archivo']}.$extension";
            if (move_uploaded_file($archivo['tmp_name'], "archivos_subidos/$nombre")) {
                echo 1;
            } else {
                echo 0;
            }
        }
    }
    function modComp($id,$code)
    {
        include("conect.php");
        $enlace =  mysql_connect($hostBD, $userBD, $passBD);
        mysql_select_db("proyects",$enlace);
        $sql = "UPDATE components SET add_comp='$code' WHERE id_comp='$id'";
        $rec = mysql_query($sql,$enlace);
    } 

    function delComp($id)
    {
        include("conect.php");
        $enlace =  mysql_connect($hostBD, $userBD, $passBD);
        mysql_select_db("proyects",$enlace);
        $sql = "DELETE FROM components WHERE id_comp = '$id'";
        $rec = mysql_query($sql,$enlace);
    } 

    
    function crearZip()
    {
        $zip = new ZipArchive;
        if ($zip->open('../../archivos.zip') === TRUE) {
            $zip->deleteName('index.html');
            $zip->deleteName('archivos_subidos/');
            $zip->addFile('../../example.html', 'index.html');
            $directorio = opendir("archivos_subidos"); //ruta actual
            while ($archivo = readdir($directorio)) //obtenemos un archivo y luego otro sucesivamente
            {
                if (is_dir($archivo))//verificamos si es o no un directorio
                {
                    echo 'maaaaaaaal<br>';
                }
                else
                {
                    $zip->addFile('archivos_subidos/'.$archivo, 'server/loginRegister/archivos_subidos/'.$archivo);
                    echo 'bien<br>';
                }
            }
            $zip->close();
            echo 'ok';
        } else {
            echo 'failed';
        }
    }


?>