iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_morgan.html);
		console.log("Created portfolio_morgan");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_morgan");
	};

}, iris.path.screen.portfolio_morgan.js);
