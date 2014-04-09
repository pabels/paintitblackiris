iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_bugatti.html);
		console.log("Created portfolio_bugatti");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_bugatti");
	};

}, iris.path.screen.portfolio_bugatti.js);
