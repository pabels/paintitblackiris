iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_challenger.html);
		console.log("Created portfolio_challenger");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_challenger");
	};

}, iris.path.screen.portfolio_challenger.js);
