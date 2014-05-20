iris.ui(function(self) {
var resource = iris.resource(iris.path.resource.resource);

self.create = function() {
   
    self.tmpl(iris.path.ui.logger.html);
    console.log("Created Logger");

    self.get("entrar").click(function(){
     
      var userName= self.get("userName").val();
      var userPassword= self.get("userPassword").val();


    	resource.login(userName,userPassword, function(data){
        debugger
        iris.notify("Sesion_iniciada",data.user);
       
      });
    
      self.get("userName").val("");
      self.get("userPassword").val("");
      
    });


};
  
  self.awake = function() {
    console.log("Awaked Logger");
  };
  

}, iris.path.ui.logger.js);
