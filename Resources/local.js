var win = Ti.UI.currentWindow;
var nav = Titanium.UI.iOS.currentNavigationWindow;
var label1 = Ti.UI.createLabel({
	text : 'Detail View'
});
win.add(label1);

label1.addEventListener('click', function(e) {
	var win = Ti.UI.createWindow({
		title : 'Playing',
		backgroundColor : 'red'
	});

	nav.openWindow(win);
});

