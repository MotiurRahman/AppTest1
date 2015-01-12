function detail(data) {
	var self = Ti.UI.createWindow({
		backgroundColor : '#e9e7e7',
		title : data.name,
		barColor : '#3d6430',
		navTintColor : '#fff',
		font : {
			fontFamily : customFont
		},
		top : 20
	});

	var ButtonRetour = Ti.UI.createButton({
		title : 'Back'
	});

	ButtonRetour.addEventListener('click', function() {
		self.close();
	});

	self.leftNavButton = ButtonRetour;

	var barData = [];

	var barImage = Ti.UI.createImageView({
		image : data.logo_url,
		height : 95,
		width : 149,
		top : 5,
		left : 6,
	});

	self.add(barImage);

	var addressTitleView = Ti.UI.createView({
		backgroundColor : '#3d6430',
		height : 20,
		width : 155,
		top : 5,
		right : 0,
	});

	self.add(addressTitleView);

	var addressTitleLabel = Ti.UI.createLabel({
		text : 'ADDRESS',
		color : '#fff',
		font : {
			size : 14,
			fontFamily : customFont
		},
		right : 5
	});

	addressTitleView.add(addressTitleLabel);

	var addressView = Ti.UI.createView({
		backgroundColor : '#fff',
		height : 70,
		width : 150,
		top : 30,
		right : 5
	});

	self.add(addressView);

	var addressLabel = Titanium.UI.createLabel({
		text : data.address + "\n" + data.city + ", MD",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		font : {
			size : 20,
			fontWeight : 'bold',
			fontFamily : customFont
		},
		top : 10,
		left : 5
	});

	addressView.add(addressLabel);

	return self;
};

module.exports = detail; 