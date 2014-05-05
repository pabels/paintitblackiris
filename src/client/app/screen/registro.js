iris.screen(function(self) {
var resource = iris.resource(iris.path.resource.resource);
  self.create = function() {

    self.tmpl(iris.path.screen.registro.html);

    console.log("screen registro created ");

  	self.get("enviar").click(function(){

      var name= self.get("name").val();
      var user= self.get("user").val();
      var pass= self.get("pass").val();
      var mail= self.get("mail").val();

      resource.register(name,user,pass,mail, function(data){
          console.log(data);
      });
    });
  };
  self.awake = function() {
    console.log("screen registro Awaked");
   

  };
}, iris.path.screen.registro.js);

