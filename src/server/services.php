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

   

    function savePost(){

        header('Content-Type: application/json');
    
        	include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
			mysql_select_db("usersb",$enlace);
			$sql = "INSERT INTO post (creador,texto) VALUES ('$_REQUEST[creador]','$_REQUEST[texto]')";
			$rec = mysql_query($sql,$enlace);
            mysql_close($enlace);
        	$result = $rec;
            echo json_encode($result);
    } 


     function saveComment(){
        header('Content-Type: application/json');
    
            include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
            mysql_select_db("usersb",$enlace);
            /*$sql = "SELECT id from post WHERE id=$_REQUEST[id]";
            $rec = mysql_query($sql,$enlace);
            while ($res=mysql_fetch_assoc($rec)) {
                $id= $res['id'];
            }*/
            $sql = "INSERT INTO comment (creador,texto,id) VALUES ('$_REQUEST[creador]','$_REQUEST[texto]',$_REQUEST[id])";
            $rec = mysql_query($sql,$enlace);
            mysql_close($enlace);
            $result =$rec;
            echo json_encode($result);
        
    }

    function getPostId(){
        header('Content-Type: application/json');
    
            include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
            mysql_select_db("usersb",$enlace);
            $sql = "SELECT id FROM post WHERE id = ( SELECT MAX( id ) FROM post )";
            $rec = mysql_query($sql,$enlace);
            while ($res=mysql_fetch_assoc($rec)) {
                $id= $res['id'];
            }
            mysql_close($enlace);
            $result =$id;
            echo json_encode($result);
        
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
        if(!$_SESSION){
            $result = array("mensaje"=>" no tienes sesion");
            echo json_encode($result);
        }else{
            $_SESSION['loginUser']=null;
            session_destroy();
            $result = array("mensaje"=>" sesion terminada");
            echo json_encode($result);
            
            
            
        }

    }

    function checkLogin(){
        header('Content-Type: application/json');
        session_start();
       	if(isset($_SESSION['loginUser'])){
            $result = array("msg"=>"checklogin exitoso", "user"=>"$_SESSION[loginUser]");
       		echo json_encode($result);
       	}else{
             $result = array("msg"=>"checklogin NO exitoso", "user"=>"$_SESSION[loginUser]");
            echo json_encode($result);
        }
    }

    
    function getAllPostIds(){
        header('Content-Type: application/json');
    
            include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
            mysql_select_db("usersb",$enlace);
            $sql = "SELECT id FROM post";
            $rec = mysql_query($sql,$enlace);
            $id=array();
            while ($res=mysql_fetch_assoc($rec)) {
                array_push($id, $res['id']);
            }
            mysql_close($enlace);
            $result =$id;
            echo json_encode($result);
    }

    
    function getAllPostNames(){
        header('Content-Type: application/json');
    
            include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
            mysql_select_db("usersb",$enlace);
            $sql = "SELECT creador FROM post";
            $rec = mysql_query($sql,$enlace);
            $creador=array();
            while ($res=mysql_fetch_assoc($rec)) {
                array_push($creador, $res['creador']);
            }
            mysql_close($enlace);
            $result =$creador;
            echo json_encode($result);
    }


    function getAllPostTexts(){
        header('Content-Type: application/json');
    
            include("conect.php");
            $enlace =  mysql_connect($hostBD, $userBD, $passBD);
            mysql_select_db("usersb",$enlace);
            $sql = "SELECT texto FROM post";
            $rec = mysql_query($sql,$enlace);
            $texto=array();
            while ($res=mysql_fetch_assoc($rec)) {
                array_push($texto, $res['texto']);
            }
            mysql_close($enlace);
            $result =$texto;
            echo json_encode($result);
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