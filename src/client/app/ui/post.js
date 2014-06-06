iris.ui(function(self) {
	
	 var postResource = iris.resource(iris.path.resource.resource);
self.create = function() {
    self.tmplMode(self.APPEND);
    self.tmpl(iris.path.ui.post.html);
    console.log("Created post");
   	
   	self.get("nombre").text(self.setting("y"));
    self.get("fecha").text(self.setting("z"));
    self.get("post").text(self.setting("k"))
   	
     
     self.get("comment-button").click(function(){
        self.get("comment-text").toggleClass('item-hidden ');
        self.get("apply-comment").toggleClass('item-hidden ');
      });
     var f = new Date();
     var fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();

     self.get("apply-comment").click(function(){
      if(self.get("comment-text").val()!="" && postResource.user!=""){
          self.ui("contenedor-post", iris.path.ui.comment.js,{y: postResource.user || 'Unknown', k:self.get("comment-text").val(), z:fecha});
      
           var name = postResource.user || 'Unknown';
           var text = self.get("comment-text").val();
           var id = self.setting("t");
           postResource.saveComment(name, text,fecha, id, function(data){
               console.log(data);
           });
      }else{
        alert("Debes registrate o hacer un comentario que no este vacio");
      }
     


      self.get("comment-text").val("");
      self.get("comment-text").toggleClass('item-hidden ');
      self.get("apply-comment").toggleClass('item-hidden ');
    });

    postResource.getCommentData(self.setting("t"),function(data){
        for(var i=0;i<data.creador.length;i++){
          self.ui("contenedor-post", iris.path.ui.comment.js,{y:data.creador[i] || 'Unknown', z:data.fecha[i], k:data.texto[i]});
        }
        console.log(data);
    });
    
    if(self.setting("y")===postResource.user){ 
      self.get("editar").toggleClass('item-hidden ');
      self.get("eliminar").toggleClass('item-hidden ');
    }
    self.get("editar").click(function(){
      self.get("aplicar").toggleClass('item-hidden ');
      self.get("edit-text").toggleClass('item-hidden ');
      self.get("edit-text").text(self.setting("k"));
      self.get("post").toggleClass(' item-hidden');
    });
    self.get("aplicar").click(function(){
      self.get("editar").toggleClass(' item-hidden');
      self.get("post").text(self.get("edit-text").val());
      self.get("edit-text").toggleClass(' item-hidden');
      postResource.editPost(self.get("edit-text").val(), self.setting("t"), function(data){
          console.log(data);
      });
      self.get("post").toggleClass('item-hidden ');
      self.get("edit-text").text("");
      self.get("aplicar").toggleClass(' item-hidden');
    });

    self.get("eliminar").click(function(){
      postResource.deletePost(self.setting("t"), function(data){
          console.log(data);
          iris.navigate("#/foro");
      });
      
    });



};
  
  self.awake = function() {
    console.log("Awaked post");
  };


}, iris.path.ui.post.js);
