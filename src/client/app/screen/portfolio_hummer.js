iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_hummer.html);
		console.log("Created portfolio_hummer");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_hummer");
	};

}, iris.path.screen.portfolio_hummer.js);
