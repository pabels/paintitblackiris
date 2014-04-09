iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.workshop.html);
		console.log("Screen Created workshop");
			
	};
	
	self.awake = function() {
		console.log("Screen Awaked workshop");
		var carListWorkshop = new Array();
		carListWorkshop[0] = "img/astonmartin1.jpg";
		carListWorkshop[1] = "img/audi1.jpg";
		carListWorkshop[2] = "img/jeep4.jpg";
		carListWorkshop[3] = "img/mustang6.jpg";
		carListWorkshop[4] = "img/morgan1.jpg";
		carListWorkshop[5] = "img/hummer3.jpg";
		carListWorkshop[6] = "img/bugatti4.jpg";
		carListWorkshop[7] = "img/delorean2.jpg";


		function load(){

			$('#carSelect a').click(function(){
				var id=$(this).attr('id');
			 	$('#imagetoedit').attr("src", carListWorkshop[id]);
			});
		}
		load();
	};

}, iris.path.screen.workshop.js);


