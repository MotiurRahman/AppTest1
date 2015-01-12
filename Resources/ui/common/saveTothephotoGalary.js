var win = Titanium.UI.createWindow({
	backgroundColor : "#000",
});

var photo = Ti.UI.createButton({
	title : 'Save Photo',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 20,
	color : "#fff"

});

win.add(photo);

// Listen for click events.
photo.addEventListener('click', function() {
	file = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "test.jpg");
	alert(file.nativePath);
	Ti.Media.saveToPhotoGallery(file.read(), {
		success : function() {
			alert('success');
		},
		error : function() {
			alert('error');
		}
	});

});

win.open();
s