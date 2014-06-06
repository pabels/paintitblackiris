iris.resource(function(self) {

  self.user = "";


   self.login = function(userName, userPassword, callback) {
    return self.post("../server/router.php/login",

    	{
    			loginUser:userName,
    			loginPass:userPassword
    	}).done(function(data) {
        self.user = data.user;
   			callback(data);
      
  }).fail(function(data) {

     console.log("Error al enviar datos");
     callback(data);
  });
};

self.register = function(name, user, pass, mail, callback) {
    return self.post("../server/router.php/register", 
      {
          name:name,
          user:user,
          mail:mail,
          pass:pass
      }).done(function(data) {
          console.log("Entraa en register");
        callback(data);

  }).fail(function(data) {
     console.log("Error al register");
     callback(data);
  });
};

self.logout = function(callback) {

    return self.post("../server/router.php/logout").done(function(data) {         
      console.log("Entraa en logout");
      self.user = "";
      callback(data);

  }).fail(function(data) {
     console.log("Error al desloguear");
     callback(data);
  });
};

self.checkLogin=function(callback){
    return self.post("../server/router.php/checklogin").done(function(data) {         
      console.log("Entraa en checklogin");
      self.user = data.user;
      callback(data);

  }).fail(function(data) {
     console.log("Error al checklogin");
     callback(data);
  });
};

self.savePost = function(name, text,fecha, callback) {
    return self.post("../server/router.php/savePost", 
      {
          creador: name,
          fecha: fecha,
          texto: text
      }).done(function(data) {
          
          console.log("Entraa en savePost");
        callback(data);

  }).fail(function(data) {
   
     
     console.log("Error al savePost");
     callback(data);
  });
};

self.saveComment = function(name, text,fecha, id, callback) {
    return self.post("../server/router.php/saveComment", 
      {
        id: id,
        creador: name,
        fecha: fecha,
        texto: text          
      }).done(function(data) {
          console.log("Entraa en saveComment");
          callback(data);
  }).fail(function(data) {
   
     
     console.log("Error al saveComment");
     callback(data);
  });
};

self.getPostId = function(callback) {
    return self.post("../server/router.php/getPostId").done(function(data) {    
          console.log("Entraa en getPostId"); 
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getPostId");
     callback(data);
  });
};


self.getAllPostIds = function(callback) {
    return self.post("../server/router.php/getAllPostIds").done(function(data) {    
          console.log("Entraa en getAllPostIds");
          callback(data);
  }).fail(function(data) {
     console.log("Error al getAllPostIds");
     callback(data);
  });
};

self.getAllPostNames = function(callback) {
    return self.post("../server/router.php/getAllPostNames").done(function(data) {    
          console.log("Entraa en getAllPostNames");
 
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getAllPostNames");
     callback(data);
  });
};

self.getPostData = function(id, callback) {
    return self.post("../server/router.php/getPostData",{
        id: id          
      }).done(function(data) {    
          console.log("Entraa en getPostData");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getPostData");
     callback(data);
  });
};

self.getCommentData = function(id, callback) {
    return self.post("../server/router.php/getCommentData",{
        id: id
      }).done(function(data) {    
          console.log("Entraa en getCommentData");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getCommentData");
     callback(data);
  });
};

self.editPost = function(texto, id, callback) {
    return self.post("../server/router.php/editPost",{
        id: id,
        texto: texto
      }).done(function(data) {    
          console.log("Entraa en editPost");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al editPost");
     callback(data);
  });
};


self.deletePost = function(id, callback) {
    return self.post("../server/router.php/deletePost",{
        id: id
      }).done(function(data) {    
          console.log("Entraa en deletePost");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al deletePost");
     callback(data);
  });
};

self.getLastPostData = function(callback) {
    return self.post("../server/router.php/getLastPostData").done(function(data) {    
          console.log("Entraa en getLastPostData");
 
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getLastPostData");
     callback(data);
  });
};

self.MisPost = function(creador, callback) {
    return self.post("../server/router.php/MisPost",{
        creador: creador          
      }).done(function(data) {    
          console.log("Entraa en MisPost");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al MisPost");
     callback(data);
  });
};

self.OtrosPost = function(creador, callback) {
    return self.post("../server/router.php/OtrosPost",{
        creador: creador          
      }).done(function(data) {    
          console.log("Entraa en OtrosPost");
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al OtrosPost");
     callback(data);
  });
};

}, iris.path.resource.resource);
