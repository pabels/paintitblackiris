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
class getPostData {
    function post() {
        getPostData();
    }
}
class getLastPostData {
    function post() {
        getLastPostData();
    }
}

class deletePost {
    function post() {
        deletePost();
    }
}

class editPost {
    function post() {
        editPost();
    }
}

class getCommentData {
    function post() {
        getCommentData();
    }
}

class MisPost {
    function post() {
        MisPost();
    }
}

class OtrosPost {
    function post() {
        OtrosPost();
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
    "/getPostData" => "getPostData",
    "/getLastPostData" => "getLastPostData",
    "/deletePost" => "deletePost",
    "/MisPost" => "MisPost",
    "/OtrosPost" => "OtrosPost",
    "/editPost" => "editPost",
    "/getCommentData" => "getCommentData"
));
?>

