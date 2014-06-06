iris.screen(function(self) {

  var ForumResource = iris.resource(iris.path.resource.resource);
  var x='Unknown';
   iris.on("Sesion_iniciada",function(data){
      x=data;
    });


self.create = function() {

    self.tmpl(iris.path.screen.foro.html);
   
    console.log("screen foro created ");
    
    self.get("mis-post").click(function(){
    	if(ForumResource.user!=""){
    	ForumResource.MisPost(ForumResource.user, function(data){
    		self.destroyUIs("contenedor");
    		var tematexto="";
          	for(var i=0;i<data.creador.length;i++){
            if(data.texto[i].length>27){
	                tematexto=data.texto[i].substring(0,24)+"...";
	            }else{
	                tematexto=data.texto[i];
	            }

	             self.ui("contenedor", iris.path.ui.minipost.js,{y: data.creador[i] || 'Unknown', z: data.fecha[i], k: tematexto, ide:data.id[i]});
          	}
          console.log(data);
    	});
    	}
    });
    
    self.get("otros-post").click(function(){
    	if(ForumResource.user!=""){
    	ForumResource.OtrosPost(ForumResource.user, function(data){
    		self.destroyUIs("contenedor");
    		var tematexto="";
          	for(var i=0;i<data.creador.length;i++){
            if(data.texto[i].length>27){
	                tematexto=data.texto[i].substring(0,24)+"...";
	            }else{
	                tematexto=data.texto[i];
	            }
	             self.ui("contenedor", iris.path.ui.minipost.js,{y: data.creador[i] || 'Unknown', z: data.fecha[i], k: tematexto, ide:data.id[i]});
          	}
          console.log(data);
    	});
    	}
    });

    self.get("todos-post").click(function(){
    	if(ForumResource.user!=""){
    	ForumResource.getAllPostNames(function(data){
    	  self.destroyUIs("contenedor");
          var tematexto="";
          for(var i=0;i<data.creador.length;i++){
              if(data.texto[i].length>27){
                tematexto=data.texto[i].substring(0,24)+"...";
              }else{
                tematexto=data.texto[i];
              }

               self.ui("contenedor", iris.path.ui.minipost.js,{y: data.creador[i] || 'Unknown', z: data.fecha[i], k: tematexto, ide:data.id[i]});
          }
          console.log(data);
      });
    	}
    });

};

self.awake = function() {
    console.log("screen foro Awaked");
    var id='votar';
    
    var texto="";
    var f = new Date();
    var fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
    
    self.get("enviar").click(function(){
      if(self.get("text").val().length>27){
         texto=self.get("text").val().substring(0,24)+"...";
      }else{
         texto=self.get("text").val();
      }

      if(self.get("text").val()!="" && ForumResource.user!=""){

         var name = ForumResource.user || 'Unknown';
         var text = self.get("text").val();
         ForumResource.savePost(name, text, fecha, function(data){
          console.log(data);
          ForumResource.getLastPostData(function(data){
            self.ui("contenedor", iris.path.ui.minipost.js,{y:data.creador || 'Unknown', z:data.fecha, k:data.texto, ide:data.id});
          });
         });
         
         

      }else{
        alert("Debes registrate o crear un post que no este vacio");
      }
      


      self.get("text").val("");

    });
    self.destroyUIs("contenedor");
    ForumResource.getAllPostNames(function(data){
          var tematexto="";
          for(var i=0;i<data.creador.length;i++){
              if(data.texto[i].length>27){
                tematexto=data.texto[i].substring(0,24)+"...";
              }else{
                tematexto=data.texto[i];
              }

               self.ui("contenedor", iris.path.ui.minipost.js,{y: data.creador[i] || 'Unknown', z: data.fecha[i], k: tematexto, ide:data.id[i]});
          }
          console.log(data);
      });

  };
}, iris.path.screen.foro.js);

