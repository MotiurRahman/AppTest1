var win = Ti.UI.createWindow({
	title : "Button State",
	layout : 'vertical'
});

var b1 = Titanium.UI.createButton({
	color : '#fff',
	top : 30,
	width : 150,
	height : Ti.UI.SIZE,
	title : 'Test Button',
	touchEnabled : false,
	backgroundColor : 'Red'
});

b1.addEventListener('click', function() {
	alert('I am Enabled');
});

// Create a Button.
var b2 = Ti.UI.createButton({
	title : 'Enable/Disable',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 20,
	toggle : true

});

// Listen for click events.
b2.addEventListener('click', function(e) {
	if (e.source.toggle == true) {
		b1.touchEnabled = true;
		b1.title = 'Tuch Enable';
		b2.toggle = false;

	} else {
		b1.touchEnabled = false;
		b1.title = 'Tuch Disable';
		b2.toggle = true;
	}
});

// Create a Button.
var b3 = Ti.UI.createButton({
	title : 'Title Change',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 20,
});

// Listen for click events.
b3.addEventListener('click', function() {
	b1.title = "motiur";
});

win.add(b1);
win.add(b2);
win.add(b3);

win.open(); 