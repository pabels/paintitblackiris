iris.screen(function(self) {

  self.create = function() {

    self.tmpl(iris.path.screen.star.html);
    console.log("screen star created ");

  };
  self.awake = function() {
    console.log("screen star Awaked");
    var carList = new Array();
carList[0] = "img/astonmartin1.jpg";
carList[1] = "img/astonmartin2.jpg";
carList[2] = "img/astonmartin3.jpg";
carList[3] = "img/astonmartin4.jpg";
carList[4] = "img/astonmartin5.jpg";
carList[5] = "img/astonmartin6.jpg";
carList[6] = "img/astonmartin7.jpg";
carList[7] = "img/audi1.jpg";
carList[8] = "img/audi2.jpg";
carList[9] = "img/audi3.jpg";
carList[10] = "img/audi4.jpg";
carList[11] = "img/audi5.jpg";
carList[12] = "img/audi6.jpg";
carList[13] = "img/audi7.jpg";
carList[14] = "img/bugatti1.jpg";
carList[15] = "img/bugatti2.jpg";
carList[16] = "img/bugatti3.jpg";
carList[17] = "img/bugatti4.jpg";
carList[18] = "img/bugatti5.jpg";
carList[19] = "img/bugatti6.jpg";
carList[20] = "img/bugatti7.jpg";
carList[21] = "img/bugatti8.jpg";
carList[22] = "img/challenger1.jpg";
carList[23] = "img/challenger2.jpg";
carList[24] = "img/challenger3.jpg";
carList[25] = "img/challenger4.jpg";
carList[26] = "img/challenger5.jpg";
carList[27] = "img/challenger6.jpg";
carList[28] = "img/challenger7.jpg";
carList[29] = "img/delorean1.jpg";
carList[30] = "img/delorean2.jpg";
carList[31] = "img/delorean3.jpg";
carList[32] = "img/delorean4.jpg";
carList[33] = "img/delorean5.jpg";
carList[34] = "img/delorean6.jpg";
carList[35] = "img/delorean7.jpg";
carList[36] = "img/hummer1.jpg";
carList[37] = "img/hummer2.jpg";
carList[38] = "img/hummer3.jpg";
carList[39] = "img/hummer4.jpg";
carList[40] = "img/hummer5.jpg";
carList[41] = "img/hummer6.jpg";
carList[42] = "img/hummer7.jpg";
carList[43] = "img/jeep1.jpg";
carList[44] = "img/jeep2.jpg";
carList[45] = "img/jeep3.jpg";
carList[46] = "img/jeep4.jpg";
carList[47] = "img/jeep5.jpg";
carList[48] = "img/jeep6.jpg";
carList[49] = "img/jeep7.jpg";
carList[50] = "img/morgan1.jpg";
carList[51] = "img/morgan2.jpg";
carList[52] = "img/morgan3.jpg";
carList[53] = "img/morgan4.jpg";
carList[54] = "img/morgan5.jpg";
carList[55] = "img/morgan6.jpg";
carList[56] = "img/morgan7.jpg";
carList[57] = "img/mustang1.jpg";
carList[58] = "img/mustang2.jpg";
carList[59] = "img/mustang3.jpg";
carList[60] = "img/mustang4.jpg";
carList[61] = "img/mustang5.jpg";
carList[62] = "img/mustang6.jpg";
carList[63] = "img/mustang7.jpg";

var i=0;
var j=0;
var random = new Array();
while(i<=5){
	random.push(Math.floor(Math.random() * (carList.length)));
	i++;
}
x=Math.floor(Math.random() * (carList.length));


	while(j<10){
		if(random[j]==random[j+1] || random[j]==random[j+2] || random[j]==random[j+3]|| random[j]==random[j+4]|| random[j]==random[j+5]){
			random[j]=Math.floor(Math.random() * (carList.length));
		}else{
			j++;
		}

	}




t=0;
for(var i=0;i<6;i++){
	x=random[t];
    document.getElementById("indeximg"+i).src=carList[x];
    var z=document.getElementById("indeximage"+i).getElementsByTagName("p");
    z[0].innerHTML=carList[x].substring(4,carList[x].length-5);
    z=document.getElementById("indeximage"+i).getElementsByTagName("a");
    z[0].href="portfolio-"+carList[x].substring(4,carList[x].length-5)+".html";
    t++;
}


  };
}, iris.path.screen.star.js);

