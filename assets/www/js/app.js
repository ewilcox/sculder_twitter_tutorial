 function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
 }
 function onDeviceReady(){
    alert("PhoneGap is working!!");
 }
 function onError(){
     alert("Error");
 }
 var theScroll;
 function scroll(){
     theScroll = new iScroll('wrapper');
 }
 document.addEventListener('DOMContentLoaded', scroll, false);
 
 $('#tab-bar a').on('click', function(e){
	    e.preventDefault();
	    var nextPage = $(e.target.hash);
	    $("#pages .current").removeClass("current");
	    nextPage.addClass("current");
	});
 