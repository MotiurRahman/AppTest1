var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	layout : 'vertical'
});

var timePicker = Ti.UI.createPicker({
	top : 1000
});

// Create a Button.
var time = Ti.UI.createButton({
	title : 'Time',
	height : 50,
	width : 100,
	top : 20,
});

// Listen for click events.
time.addEventListener('click', function() {
	timePicker.showTimePickerDialog({
		callback : function(e) {
			if (e.cancel) {
				Ti.API.info('User canceled dialog');
			} else {
				Ti.API.info('User selected Time: ' + e.value);
			}
		}
	});

});

var date = Ti.UI.createButton({
	title : 'Date',
	height : 50,
	width : 100,
	top : 20,
});

// Listen for click events.
date.addEventListener('click', function() {
	timePicker.showDatePickerDialog({
		callback : function(e) {
			if (e.cancel) {
				Ti.API.info('User canceled dialog');
			} else {
				Ti.API.info('User selected Time: ' + e.value);
			}
		}
	});

});

win.add(time);
win.add(date);
win.add(timePicker);

win.open();
