iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.tools.html);
    
    console.log("screen tools created ");

  };
  self.awake = function() {
    console.log("screen tools Awaked");
    //location.reload();

  };
}, iris.path.screen.tools.js);



