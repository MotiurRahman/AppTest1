var win = Ti.UI.createWindow({
	backgroundColor : '#fff',
	layout : 'vertical',
	title : 'Motiur Rahman',
});

var scrollView = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	layout : 'vertical',
	top : 10
});

// Create a Button.
var show = Ti.UI.createButton({
	title : 'Show Button',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 20,
});

win.add(show);

show.addEventListener('click', function(e) {
	var win1 = Ti.UI.createWindow({
		backgroundColor : 'green',

	});

	win1.open();
});

function textData(i) {

	var text = Ti.UI.createTextField({
		height : 40,
		top : 10,
		left : 40,
		width : Ti.UI.FILL,
		hintText : 'This is hint text',
		softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	return text;
};

for (var i = 0; i < 50; i++) {

	var data = textData(i);

	scrollView.add(data);

};

win.add(scrollView);

win.addEventListener("open", function(evt) {
	var actionBar = win.activity.actionBar;
	actionBar.onHomeIconItemSelected = function() {
		var win1 = Ti.UI.createWindow({
			backgroundColor : 'green',

		});

		win1.open();
	};
});

win.activity.onCreateOptionsMenu = function(e) {
	var menu = e.menu;
	var menuItem = menu.add({
		title : "Compose",
		showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
	});
	var menuItem1 = menu.add({
		title : "Compose",
		showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
	});
	var menuItem2 = menu.add({
		title : "Compose",
		showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
	});
	menuItem.addEventListener("click", function(e) {
		alert("Action Item Clicked!");
	});
};

win.open();
