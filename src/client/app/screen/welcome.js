iris.screen(function(self) {
	var resource = iris.resource(iris.path.resource.resource);
	self.create = function() {
		
		self.tmpl(iris.path.screen.welcome.html);
		self.screens("contenedor", [["star",iris.path.screen.star.js],["tools",iris.path.screen.tools.js], ["contact",iris.path.screen.contact.js],["proyects",iris.path.screen.proyects.js],["car_gallery",iris.path.screen.car_gallery.js],["foro",iris.path.screen.foro.js],["registro",iris.path.screen.registro.js],["workshop",iris.path.screen.workshop.js]]);
		console.log("Created Start");
		self.get("loginbutton").click(function(){

			  self.ui("modal", iris.path.ui.logger.js);	  
		});

		self.get("logout").click(function(){

			resource.logout(function(data){
	          console.log(data);
	      	});
		});
	}
	
	self.awake = function() {

		console.log("Awaked Start");	
	
	};

}, iris.path.screen.welcome.js);
