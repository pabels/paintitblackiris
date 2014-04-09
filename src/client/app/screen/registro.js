iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.registro.html);
   
    console.log("screen registro created ");

  };
  self.awake = function() {
    console.log("screen registro Awaked");
    //location.reload();

  };
}, iris.path.screen.registro.js);

