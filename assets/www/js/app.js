var pictureSource,
	destinationType;

function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
 }
function getPhoto(imageData) {
	var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = imageData;
}
function capturePhoto() {
    navigator.camera.getPicture(getPhoto, onError, { quality: 50 });
}
 function onDeviceReady(){
    //alert("PhoneGap is working!!");
	 pictureSource=navigator.camera.PictureSourceType;
     destinationType=navigator.camera.DestinationType;
 }
 function onError(message){
     alert("Error: " + message);
 }
// iscroll stuff - taking out now for jQuery mobile instead - works much better
// var theScroll;
// function scroll(){
//     theScroll = new iScroll('wrapper');
// }
// document.addEventListener('DOMContentLoaded', scroll, false);
 
 function getTweets(data) {
	 //console.log(data);
	 var output='<ul data-role="listview" data-theme="a">';
	 $.each(data.results, function(key, val) {
		 //console.log(val.text);
		 var text=val.text,
		 	thumbnail= val.profile_image_url,
			name=val.from_user_name,
			user=val.from_user;
		 output+= '<li>';
		 output += '<img src="'+thumbnail +'" alt = "Photo of "'+name +'">';
		 output += '<div data-role="controlgroup"><a href="http://twitter.com/'+user+'"><h2>'+name+'</h2></a>'+text+'</div>';
		 output +='</li>';
	 });
	 output += '</ul>';
	 $('#tweetlist').html(output);
}