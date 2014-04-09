iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_astonmartin.html);
		console.log("Created portfolio_astonmartin");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_astonmartin");
	};

}, iris.path.screen.portfolio_astonmartin.js);
