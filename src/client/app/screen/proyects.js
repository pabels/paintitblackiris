iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.proyects.html);
   
    console.log("screen proyects created ");

  };
  self.awake = function() {
    console.log("screen proyects Awaked");
    //location.reload();

  };
}, iris.path.screen.proyects.js);

