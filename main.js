/*Grab the input value */
document.querySelector(".js-go").addEventListener('click',function(){
	var input = document.querySelector("input").value;
	
	pushToDOM(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	var input = document.querySelector("input").value;
	console.log(input);
	// if the key ENTER is pressed......
	if(e.which === 13) {
	pushToDOM(input);
}
});
/* get the data stuff with the API */

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

/*

pushToDOM(data);
*/
//AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){
	var data = e.target.response;
pushToDOM(data);
});

/* display  Gifs */
function pushToDOM(input) {


var response = JSON.parse(input);
var imageUrls = response.data;

imageUrls.forEach(function(image){
	
var src = image.images.fixed_height.url;
console.log(src);
var container = document.querySelector(".js-container");

container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
});
}