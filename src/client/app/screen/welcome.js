iris.screen(function(self) {
	self.create = function() {
		
		self.tmpl(iris.path.screen.welcome.html);
		//self.ui("contenedor",iris.path.ui.menu.js); Mañana preguntar a surtich de como poner un index.
		self.screens("contenedor", [["star",iris.path.screen.star.js],["tools",iris.path.screen.tools.js], ["contact",iris.path.screen.contact.js],["proyects",iris.path.screen.proyects.js],["car_gallery",iris.path.screen.car_gallery.js],["foro",iris.path.screen.foro.js],["registro",iris.path.screen.registro.js]]);
		console.log("Created Start");
		
	};
	
	self.awake = function() {
		console.log("Awaked Start");
		if (location.hash === "" || location.hash === "#") {
			iris.navigate("#/star");
		}
		
	
	};

}, iris.path.screen.welcome.js);
