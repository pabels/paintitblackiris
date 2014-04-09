iris.screen(function(self) {
	self.create = function() {

		self.tmpl(iris.path.screen.car_gallery.html);
		console.log("screen Created car_gallery");

			
	};
	
	self.awake = function() {
		console.log("screen Awaked car_gallery");
		//location.reload();

		var carListGallery = new Array();
		carListGallery[0] = "img/astonmartin1.jpg";
		carListGallery[1] = "img/astonmartin2.jpg";
		carListGallery[2] = "img/astonmartin3.jpg";
		carListGallery[3] = "img/astonmartin4.jpg";
		carListGallery[4] = "img/astonmartin5.jpg";
		carListGallery[5] = "img/astonmartin6.jpg";
		carListGallery[6] = "img/astonmartin7.jpg";
		carListGallery[7] = "img/audi1.jpg";
		carListGallery[8] = "img/audi2.jpg";
		carListGallery[9] = "img/audi3.jpg";
		carListGallery[10] = "img/audi4.jpg";
		carListGallery[11] = "img/audi5.jpg";
		carListGallery[12] = "img/audi6.jpg";
		carListGallery[13] = "img/audi7.jpg";
		carListGallery[14] = "img/bugatti1.jpg";
		carListGallery[15] = "img/bugatti2.jpg";
		carListGallery[16] = "img/bugatti3.jpg";
		carListGallery[17] = "img/bugatti4.jpg";
		carListGallery[18] = "img/bugatti5.jpg";
		carListGallery[19] = "img/bugatti6.jpg";
		carListGallery[20] = "img/bugatti7.jpg";
		carListGallery[21] = "img/bugatti8.jpg";
		carListGallery[22] = "img/challenger1.jpg";
		carListGallery[23] = "img/challenger2.jpg";
		carListGallery[24] = "img/challenger3.jpg";
		carListGallery[25] = "img/challenger4.jpg";
		carListGallery[26] = "img/challenger5.jpg";
		carListGallery[27] = "img/challenger6.jpg";
		carListGallery[28] = "img/challenger7.jpg";
		carListGallery[29] = "img/delorean1.jpg";
		carListGallery[30] = "img/delorean2.jpg";
		carListGallery[31] = "img/delorean3.jpg";
		carListGallery[32] = "img/delorean4.jpg";
		carListGallery[33] = "img/delorean5.jpg";
		carListGallery[34] = "img/delorean6.jpg";
		carListGallery[35] = "img/delorean7.jpg";
		carListGallery[36] = "img/hummer1.jpg";
		carListGallery[37] = "img/hummer2.jpg";
		carListGallery[38] = "img/hummer3.jpg";
		carListGallery[39] = "img/hummer4.jpg";
		carListGallery[40] = "img/hummer5.jpg";
		carListGallery[41] = "img/hummer6.jpg";
		carListGallery[42] = "img/hummer7.jpg";
		carListGallery[43] = "img/jeep1.jpg";
		carListGallery[44] = "img/jeep2.jpg";
		carListGallery[45] = "img/jeep3.jpg";
		carListGallery[46] = "img/jeep4.jpg";
		carListGallery[47] = "img/jeep5.jpg";
		carListGallery[48] = "img/jeep6.jpg";
		carListGallery[49] = "img/jeep7.jpg";
		carListGallery[50] = "img/morgan1.jpg";
		carListGallery[51] = "img/morgan2.jpg";
		carListGallery[52] = "img/morgan3.jpg";
		carListGallery[53] = "img/morgan4.jpg";
		carListGallery[54] = "img/morgan5.jpg";
		carListGallery[55] = "img/morgan6.jpg";
		carListGallery[56] = "img/morgan7.jpg";
		carListGallery[57] = "img/mustang1.jpg";
		carListGallery[58] = "img/mustang2.jpg";
		carListGallery[59] = "img/mustang3.jpg";
		carListGallery[60] = "img/mustang4.jpg";
		carListGallery[61] = "img/mustang5.jpg";
		carListGallery[62] = "img/mustang6.jpg";
		carListGallery[63] = "img/mustang7.jpg";

		var t=0;
		load();
		function load() {
			for(var i=0;i<12;i++){
		    	document.getElementById("gallery"+i).src=carListGallery[i+t];
		    	var z=document.getElementById("indeximage"+i).getElementsByTagName("a");
		    	z[0].href="portfolio_"+carListGallery[i+t].substring(4,carListGallery[i+t].length-5)+".html";
			}
			var w=document.getElementById("pagination").getElementsByTagName("li");
			console.log(w[1]);
		    w[t/12+1].className="active";
		    w[t/12].className="";
		    w[t/12+2].className="";
		}

		function next(){
			t+=12;
			load();
		}

		function before(){
			t-=12;
			load();
		}
	};

}, iris.path.screen.car_gallery.js);




