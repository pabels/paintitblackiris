iris.resource(function(self) {

  self.user = "";
  self.ides=0;
  self.names=0;
  self.texts=0;

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
          
          console.log("Entraa");
        callback(data);

  }).fail(function(data) {
   
     
     console.log("Error al enviar datos");
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

self.savePost = function(name, text, callback) {
    return self.post("../server/router.php/savePost", 
      {
          creador: name,
          texto: text
      }).done(function(data) {
          
          console.log("Entraa en savePost");
        callback(data);

  }).fail(function(data) {
   
     
     console.log("Error al savePost");
     callback(data);
  });
};

self.saveComment = function(name, text, id, callback) {
    return self.post("../server/router.php/saveComment", 
      {
        id: id,
        creador: name,
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
          self.ides=data;
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getAllPostIds");
     callback(data);
  });
};

self.getAllPostNames = function(callback) {
    return self.post("../server/router.php/getAllPostNames").done(function(data) {    
          console.log("Entraa en getAllPostNames");
          //self.names=data;
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getAllPostNames");
     callback(data);
  });
};

self.getAllPostTexts = function(callback) {
    return self.post("../server/router.php/getAllPostTexts").done(function(data) {    
          console.log("Entraa en getAllPostTexts");
          //self.texts=data;
        callback(data);

  }).fail(function(data) {
    
     console.log("Error al getAllPostTexts");
     callback(data);
  });
};

}, iris.path.resource.resource);
