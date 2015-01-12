var win = Ti.UI.createWindow({
	backgroundColor : 'blue'
});

// Create a Button.
var Animation = Ti.UI.createButton({
	title : 'Animation',
	height : 60,
	width : 150,
	top : 20,
});

// Listen for click events.
Animation.addEventListener('click', function() {
	Ti.API.warn("Animating up!");
	var animation = Ti.UI.createAnimation({
		top : 20,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 300
	});

	view.animate(animation);
});

// Add to the parent view.
win.add(Animation);

var view = Ti.UI.createView({
	width : 200,
	height : 200,
	top : '100%'
});

// Create a Button.
var close = Ti.UI.createButton({
	title : 'close',
	height : 50,
	width : 100,
});

// Listen for click events.
close.addEventListener('click', function() {
	Ti.API.warn("Animating down!");
	var animation = Ti.UI.createAnimation({
		top : "100%",
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration : 300
	});

	view.animate(animation);
});


// Create a TextField.
var aTextField = Ti.UI.createTextField({
	height : 45,
	top : 10,
	width : 240,
	hintText : 'This is hint text',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});



// Add to the parent view.
view.add(aTextField);
// Add to the parent view.
view.add(close);
win.add(view);

win.open();
