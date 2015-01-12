var win = Ti.UI.createWindow({
	backgroundColor : '#fff'
});
// Create an ImageView.

var value = ["/KS_nav_views.png", "/KS_nav_ui.png","appicon"];


var anImageView = Ti.UI.createImageView({
	images :value,
	width : 20,
	height :20,
	top : 30,
});

anImageView.duration= 3000;
anImageView.start();
 

var cur_index = 0;
anImageView.addEventListener('change', function(e){
    cur_index = e.index;
});
 
 
anImageView.addEventListener('click', function(e){
    Ti.API.info(e.source.images[cur_index]);
        // display the image which user clicked
});



// Add to the parent view.
win.add(anImageView);
win.open();
