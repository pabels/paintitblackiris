iris.resource(function(self) {

  self.user = null;

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
      self.user = null;
      callback(data);

  }).fail(function(data) {
     console.log("Error al desloguear");
     callback(data);
  });
};

self.checkLogin=function(callback){
    return self.post("../server/router.php/checkLogin").done(function(data) {         
      debugger
      console.log("Entraa en checkLogin");
      callback(data);

  }).fail(function(data) {
     console.log("Error al checkLogin");
     callback(data);
  });
};

}, iris.path.resource.resource);
