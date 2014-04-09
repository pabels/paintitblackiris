iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.portfolio_mustang.html);
		console.log("Created portfolio_mustang");

			
	};
	
	self.awake = function() {
		console.log("Awaked portfolio_mustang");
	};

}, iris.path.screen.portfolio_mustang.js);
