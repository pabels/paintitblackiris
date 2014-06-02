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


class savePost {
    function post() {
		savePost();
    }
}

class saveComment {
    function post() {
    	saveComment();
    }
}

class getPostId {
    function post() {
    	getPostId();
    }
}

class getAllPostIds {
    function post() {
        getAllPostIds();
    }
}

class getAllPostNames {
    function post() {
        getAllPostNames();
    }
}
class getAllPostTexts {
    function post() {
        getAllPostTexts();
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
	"/savePost" => "savePost",
    "/saveComment" => "saveComment",
	"/getPostId" => "getPostId",
    "/getAllPostIds" => "getAllPostIds",
    "/getAllPostNames" => "getAllPostNames",
    "/getAllPostTexts" => "getAllPostTexts",
    "/add" => "add",
    "/del" => "del",
    "/crearhtml" => "crearhtml",
    "/crearzip" => "crearzip"
));
?>

