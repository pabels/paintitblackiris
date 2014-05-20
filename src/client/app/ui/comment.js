iris.ui(function(self) {
	self.settings({
    x: 0
  });
self.create = function() {
  
    self.tmplMode(self.APPEND);
    self.tmpl(iris.path.ui.comment.html);
    console.log("Created comment");
   	self.get("nombrecomentador").text(self.setting("x"));
   		
};
  
  self.awake = function() {
    console.log("Awaked comment");

  };


}, iris.path.ui.comment.js);
