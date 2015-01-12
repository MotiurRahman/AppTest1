// var win = Titanium.UI.createWindow({
// title : 'Video View Demo',
// backgroundColor : '#000',
// layout : 'vertical'
// });
//
// var view = Ti.UI.createView({
// width : 250,
// height : 50,
// top : "30",
// backgroundColor : '#fff'
// });
//
// var pb = Titanium.UI.createProgressBar({
// top : 10,
// width : Ti.UI.FILL,
// height : Ti.UI.FILL,
// min : 0,
// max : 100,
// value : 0,
// color : 'green',
// font : {
// fontSize : 14,
// fontWeight : 'bold'
// },
// style : Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
// });
//
// view.add(pb);
// win.add(view);
// pb.show();
//
// // Create a Button.
// var Show = Ti.UI.createButton({
// title : 'Show',
// height : Ti.UI.SIZE,
// width : Ti.UI.SIZE,
// top : 10,
// });
//
// var count = 0;
// Show.addEventListener('click', function() {
// count = count + 10;
// pb.value = count;
// });
//
// // Add to the parent view.
// win.add(Show);
//
// win.open();

var win = Ti.UI.createWindow({
	backgroundColor : 'Red'
});
var track = Ti.UI.createView({
	width : 100,
	height : 30,
	backgroundColor : 'red'
});
var progress = Ti.UI.createView({
	left : 0,
	width : 1,
	height : 30,
	backgroundColor : 'green'
});
track.add(progress);
win.add(track);
win.addEventListener('open', function() {
	progress.animate({
		width : 100,
		duration : 5000
	});
	// or: progress.width = 100;
});
win.open();
