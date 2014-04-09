iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_jeep.html);
		console.log("Created portfolio_jeep");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_jeep");
	};

}, iris.path.screen.portfolio_jeep.js);
