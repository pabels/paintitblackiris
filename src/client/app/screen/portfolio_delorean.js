iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_delorean.html);
		console.log("Created portfolio_delorean");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_delorean");
	};

}, iris.path.screen.portfolio_delorean.js);
