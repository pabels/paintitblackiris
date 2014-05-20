iris.ui(function(self) {
	self.settings({
    y: c
  });
	 var c='';
   iris.on("Sesion_iniciada",function(data){
    debugger
      c=data;
    });
self.create = function() {
   
    self.tmplMode(self.APPEND);
    self.tmpl(iris.path.ui.post.html);
    console.log("Created post");
   	var post={
        text: self.get("comment-text").val()
    };
   		self.get("nombre").text(self.setting("y"));
   	
     $('#votar').raty({ score: 1});
     self.get("comment-button").click(function(){
        self.get("comment-text").toggleClass('item-hidden ');
        self.get("apply-comment").toggleClass('item-hidden ');
      }
     );
    

     var z=c || self.setting("y");
     self.get("apply-comment").click(function(){
      if(self.get("comment-text").val()!=""){
          self.ui("contenedor-post", iris.path.ui.comment.js,{x: z}).inflate(post={
          "comment-text": self.get("comment-text").val()
        });
      }else{
        alert("No puedes crear un post vacio.");
      }
      self.get("comment-text").val("");
      self.get("comment-text").toggleClass('item-hidden ');
        self.get("apply-comment").toggleClass('item-hidden ');
    });

};
  
  self.awake = function() {
    console.log("Awaked post");
  };


}, iris.path.ui.post.js);
