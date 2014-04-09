iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.foro.html);
   
    console.log("screen foro created ");

  };
  self.awake = function() {
    console.log("screen foro Awaked");
    //location.reload();

  };
}, iris.path.screen.foro.js);

