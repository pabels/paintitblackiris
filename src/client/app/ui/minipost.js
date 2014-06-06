iris.ui(function(self) {
	var resource = iris.resource(iris.path.resource.resource);
self.create = function() {
	self.tmplMode(self.APPEND);
    self.tmpl(iris.path.ui.minipost.html);
   
    self.get("autor").text(self.setting("y")); //este es el autor
    self.get("fecha").text(self.setting("z")); //esta es la fecha
    self.get("tema").text(self.setting("k")); //este es el texto
 
   	

    self.inflate({href: '#/postactual;id=' + self.setting("ide")});

};
  
  self.awake = function() {
   
  };


}, iris.path.ui.minipost.js);