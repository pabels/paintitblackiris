iris.ui(function(self) {
	
self.create = function() {
  
    self.tmplMode(self.APPEND);
    self.tmpl(iris.path.ui.comment.html);
    console.log("Created comment");
   	self.get("nombrecomentador").text(self.setting("y"));
    self.get("comment-textarea").text(self.setting("k"));
    self.get("fecha").text(self.setting("z"));
   		
};
  
  self.awake = function() {
    console.log("Awaked comment");

  };


}, iris.path.ui.comment.js);
