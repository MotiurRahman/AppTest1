var win = Titanium.UI.createWindow({
	backgroundColor : '#000',
	layout : 'vertical'
});

var view = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : 80,
	top : 20,
	layout : 'horizontal'
});
// Create a Label.
var to = Ti.UI.createLabel({
	text : 'To',
	color : '#fff',
	font : {
		fontSize : 30
	},
	height : Ti.UI.SIZE,
	width : 100,
	left : 10,

});

// Add to the parent view.
view.add(to);

// Create a TextField.
var number = Ti.UI.createTextField({
	height : Ti.UI.SIZE,
	left : 10,
	color : '#fff',
	textAlign : 'left',
	width : Ti.UI.FILL,
	hintText : 'Enter Number',
	keyboardType : Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Add to the parent view.
view.add(number);

win.add(view);

var sms = Ti.UI.createTextArea({
	borderWidth : 5,
	borderColor : 'red',
	borderRadius : 5,
	color : '#fff',
	font : {
		fontSize : 25,
	},
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_GO,
	textAlign : 'left',
	hintText : 'Enter Massage',

	top : 20,
	width : Ti.UI.FILL,
	height : 200
});

win.add(sms);

// Create a Button.
var send = Ti.UI.createButton({
	title : 'send',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 20,
	right : 20
});

// Listen for click events.
send.addEventListener('click', function() {
	var intent = Ti.Android.createIntent({
		action : Ti.Android.ACTION_VIEW,
		type : "vnd.android-dir/mms-sms"
	});
	intent.putExtra("address", number.getValue());
	intent.putExtra("sms_body", sms.getValue());
	Ti.Android.currentActivity.startActivity(intent);
});

// Add to the parent view.
win.add(send);

win.open();
