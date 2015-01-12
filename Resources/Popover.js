function Popover() {

	var contentWindow = Ti.UI.createWindow({
		backgroundColor : 'Gray',
		title : 'Popup',
		width : 250,
		height : 220
	});

	var theTableView = Ti.UI.createTableView({
		top : 20
	});

	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window : contentWindow,
		modal : true
	});

	var tableData = [{
		title : 'Row 1'
	}, {
		title : 'Row 2'
	}, {
		title : 'Row 3'
	}, {
		title : 'Row 4'
	}, {
		title : 'Row 5'
	}];

	theTableView.setData(tableData);
	contentWindow.add(theTableView);

	var thePopover = Ti.UI.iPad.createPopover({
		width : 250,
		height : 220,
		contentView : navWindow,
	});

	return thePopover;
}

module.exports = Popover; 