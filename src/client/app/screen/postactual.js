iris.screen(function(self) {
var resource = iris.resource(iris.path.resource.resource);
self.create = function() {
    self.tmpl(iris.path.screen.postactual.html);
    console.log("screen postactual created ");
   	

};

self.awake = function(params) {

    console.log("screen postactual Awaked");
 	self.destroyUIs("contenedor");
     resource.getPostData(params.id, function(data){
     	self.ui("contenedor", iris.path.ui.post.js,{y:data.creador || 'Unknown', z:data.fecha, k:data.texto, t:params.id});
     });

    

};

}, iris.path.screen.postactual.js);

