function create(obj) {
	var win = Ti.UI.createWindow({
		title : obj.title || 'Untitled',
		backgroundColor : '#336699',
		layout : 'vertical'
	});
	//Possible delete
	var screenWidth = Ti.Platform.displayCaps.platformWidth;
	var screenHeight = Ti.Platform.displayCaps.platformHeight;

	function GetHeight(value) {
		var temp = (value * 100) / 480;
		return parseInt((screenHeight * temp) / 100);
	}

	function GetWidth(value) {
		var temp = (value * 100) / 320;
		return parseInt((screenWidth * temp) / 100);
	}

	//Possible delete
	var image = Titanium.UI.createImageView({
		image : "/images/Homelogo.jpg",
		top : GetHeight(10),
		width : GetWidth(100),
		height : GetHeight(100),
	});

	win.add(image);
	//Creating the Exec Button
	var execButton = Ti.UI.createButton({
		title : 'Exec',
		width : GetWidth(100),
		height : GetHeight(20),
		top : GetHeight(10)
	});
	win.add(execButton);
	execButton.addEventListener('click', function(e) {
		var image = require("ui/common/imageShow");
		var newImg = new image("Test");

		newImg.open();
	});
	//Creating the About Button
	var aboutButton = Ti.UI.createButton({
		title : 'About',
		width : GetWidth(100),
		height : GetHeight(20),
		top : GetHeight(10)
	});
	win.add(aboutButton);
	aboutButton.addEventListener('click', function(e) {
		var aboutWin = require('ui/common/home/about_window').create({
			title : 'About Matchday Society'
		});

		aboutWin.open();
	});
	//Creating the Leam button
	var leamButton = Ti.UI.createButton({
		title : 'Leam FC Fixtures',
		width : GetWidth(100),
		height : GetHeight(20),
		top : GetHeight(10)
	});
	win.add(leamButton);
	leamButton.addEventListener('click', function(e) {
		var leamWin = require('ui/common/home/leam_window').create({
			title : 'Leamington FC Home Fixtures 2014/15'
		});

		leamWin.open();
	});

	//Creating the Contact button

	var contactButton = Titanium.UI.createButton({
		title : 'Contact',
		width : GetWidth(100),
		height : GetHeight(20),
		top : GetHeight(10)
	});
	win.add(contactButton);
	contactButton.addEventListener('click', function(e) {
		var contactWin = require('ui/common/home/contact_window').create({
			title : 'Contact us'
		});
		contactWin.open();
	});

	return win;
}

module.exports = create;
