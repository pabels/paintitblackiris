iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_audi.html);
		console.log("Created portfolio_audi");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_audi");
	};

}, iris.path.screen.portfolio_audi.js);
