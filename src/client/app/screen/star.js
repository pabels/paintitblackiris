iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.star.html);
   
    console.log("screen star created ");

  };
  self.awake = function() {
    console.log("screen star Awaked");

  };
}, iris.path.screen.star.js);

