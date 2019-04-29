"use strict";	
document.getElementById("add-btn").addEventListener("click", AddPicture);
document.getElementById("delete-btn").addEventListener("click", DeletePhoto);

function URLvalidator(url){
	var regex = new RegExp("^(https?:\\/\\/)?"+
	    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+
	    "((\\d{1,3}\\.){3}\\d{1,3}))"+
	    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+
	    "(\\?[;&a-z\\d%_.~+=-]*)?"+
	    "(\\#[-a-z\\d_]*)?$","i");
	  return !!regex.test(url);
	}
	function AddPicture(){
	  var user_url = ($("image-url").value);
      var img = document.createElement("img");
	  if(validateURL(user_url)){
	    img.src = user_url;
	    img.className = "planning-img";
		img.id = "img_" + document.getElementsByTagName("img").length;
$("planning-area").appendChild(img);
    $("image-url").value = "";
  }
  else{
    $("url-error").classList.toggle("alert");
  }
}
function GrabImage(delete_url){
  var imgs = document.getElementsByTagName("img");
  var return_value = null;
  Array.prototype.forEach.call(imgs, function(images){
    if(images.src == delete_url){
      return_value = images;
    }
  });
  return return_value;
}
function DeletePhoto(){
  var remove_url = ($("image-url").value);
  var remove_img;
  if(validateURL(remove_url)){
    remove_img = GrabImage(remove_url);
    $("planning-area").removeChild(remove_img);
    $("image-url").value = "";
  }
  else{
    $("url-error").classList.toggle("alert");
  }
}
var getImageURL = function() {
  document.onclick = function(e) {
    if (e.target.tagName == "IMG"){
      var image = e.target.getAttribute("src");
      $("image-url").value = image;
    }
  };
};

getImageURL();
