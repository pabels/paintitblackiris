iris.screen(function(self) {

  var ForumResource = iris.resource(iris.path.resource.resource);
  var x='Unknown';
   iris.on("Sesion_iniciada",function(data){
      x=data;
    });


self.create = function() {

    self.tmpl(iris.path.screen.foro.html);
   
    console.log("screen foro created ");
    var id='votar';
    var post={
        text: self.get("text").val()
    };
    self.get("enviar").click(function(){  
      if(self.get("text").val()!=""){
          self.ui("contenedor", iris.path.ui.post.js,{y: ForumResource.user || 'Unknown'}).inflate(post={
          text: self.get("text").val()
        });
      }else{
        alert("No puedes crear un post vacio.");
      }
      var name = ForumResource.user || 'Unknown';
      var text = self.get("text").val();
      ForumResource.savePost(name, text, function(data){
          console.log(data);
      });


      self.get("text").val("");

    });
   	var ids=0;
   	var nombres=0;
   	var textos=0;
    ForumResource.getAllPostIds(function(data){	
    	ids=data;
          console.log(data);
      });
   
    ForumResource.getAllPostNames(function(data){
         nombres=data;
          console.log(data);
      });
    ForumResource.getAllPostTexts(function(data){
        textos=data;
          console.log(data);
      });
    
    /*for(var i=0;i<=ids.length;i++){
       self.ui("contenedor", iris.path.ui.post.js,{y: nombres[i] || 'Unknown'}).inflate(post={
          text: textos[i]
        });
       console.log("estoy en for");
    }*/
};

self.awake = function() {
    console.log("screen foro Awaked");

  };
}, iris.path.screen.foro.js);

