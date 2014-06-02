iris.ui(function(self) {
	
	 var postResource = iris.resource(iris.path.resource.resource);
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
     var id=0;

     setTimeout(function(){
        postResource.getPostId(function(data){
        id=data;
     });},2000);

     self.get("apply-comment").click(function(){
      if(self.get("comment-text").val()!=""){
          self.ui("contenedor-post", iris.path.ui.comment.js,{x: postResource.user || 'Unknown'}).inflate(post={
          "comment-text": self.get("comment-text").val()
        });
      }else{
        alert("No puedes crear un post vacio.");
      }
      var name = postResource.user || 'Unknown';
      var text = self.get("comment-text").val();
      postResource.saveComment(name, text, id, function(data){
          console.log(data);
      });


      self.get("comment-text").val("");
      self.get("comment-text").toggleClass('item-hidden ');
        self.get("apply-comment").toggleClass('item-hidden ');
    });

    //getAllCommentName
    //gatAllCommentText
    
    //recuperar y pintar sus comentarios
   
};
  
  self.awake = function() {
    console.log("Awaked post");
  };


}, iris.path.ui.post.js);
