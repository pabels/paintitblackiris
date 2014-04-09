iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.contact.html);
   
    console.log("screen contact created ");

  };
  self.awake = function() {
    console.log("screen contact Awaked");
    //location.reload();

  };
}, iris.path.screen.contact.js);

