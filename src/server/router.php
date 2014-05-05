<?php
require_once("lib/toro.php");
require_once("services.php");

class login {
    function post() {
		LoginUser();
    }
}

class register {
    function post() {
		RegisterUser();
    }
}
class logout {
    function post() {
		LogOut();
    }
}

class checklogin {
    function post() {
		checkLogin();
    }
}


class confirm {
    function get($code) {
		ConfirmUser($code);
    }
}

class addapp {
    function post() {
    	addApp();
    }
}

class showapp {
    function post() {
    	showApp();
    }
}

class addcomp {
    function post() {
        addcomp();
    }
}

class showcomp {
    function post() {
        showcomp();
    }
}
class subir {
    function post() {
        subirArchivo();
    }
}
class add {
    function post() {
        modComp($_POST['id'],$_POST['code']);
    }
}

class del {
    function post() {
        delComp($_POST['id']);
    }
}

class crearhtml {
    function post() {
        crearHtml();
    }
}

class crearzip {
    function post() {
        crearZip();
    }
}

Toro::serve(array(
	"/login" => "login",
	"/register" => "register",
	"/logout" => "logout",
	"/checklogin" => "checkLogin",
	"/code/:alpha" => "confirm",
    "/addApp" => "addapp",
	"/showApp" => "showapp",
    "/addcomp" => "addcomp",
    "/showcomp" => "showcomp",
    "/subirArchivo" => "subir",
    "/add" => "add",
    "/del" => "del",
    "/crearhtml" => "crearhtml",
    "/crearzip" => "crearzip"
));
?>

