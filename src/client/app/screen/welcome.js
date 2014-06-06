iris.screen(function(self) {
	var resource = iris.resource(iris.path.resource.resource);
	var modal;
	
	self.create = function() {

  		resource.checkLogin(function(data) {
  			self.inflate({completed:resource.user});

  		});
  		
		iris.on("Sesion_iniciada",function(data){
			self.inflate({completed:data});
			modal.get().modal('hide');
	
		});

		self.tmpl(iris.path.screen.welcome.html);
		modal=self.ui("modal", iris.path.ui.logger.js);
		
		self.screens("contenedor", [["star",iris.path.screen.star.js],
			["tools",iris.path.screen.tools.js],
			["contact",iris.path.screen.contact.js],
			["proyects",iris.path.screen.proyects.js],
			["car_gallery",iris.path.screen.car_gallery.js],
			["foro",iris.path.screen.foro.js],
			["registro",iris.path.screen.registro.js],
			["workshop",iris.path.screen.workshop.js],
			["postactual",iris.path.screen.postactual.js]
		]);
		if(location.hash==="#" || location.hash===""){
			iris.navigate("#/star");
		}
		console.log("Created Start");
		self.get("loginbutton").click(function(){

			modal.show();
		});

		self.get("logout").click(function(){
			resource.logout(function(data) {
  			self.inflate({completed:resource.user});

  		});
			
		});

		
		
	}
	
	self.awake = function() {

		console.log("Awaked Start");	
	
	};
	

	

}, iris.path.screen.welcome.js);
