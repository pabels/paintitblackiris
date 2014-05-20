iris.screen(function(self) {
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
          self.ui("contenedor", iris.path.ui.post.js,{y: x}).inflate(post={
          text: self.get("text").val()
        });
      }else{
        alert("No puedes crear un post vacio.");
      }
      self.get("text").val("");

    });
   
  };
  self.awake = function() {
    console.log("screen foro Awaked");

  };
}, iris.path.screen.foro.js);

