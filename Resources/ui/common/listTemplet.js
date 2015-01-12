var myTemplate = {

	properties : {
		width : Ti.UI.FILL,
		height : 100,
		layout : 'vertical',
		backgroundColor : 'transparent',
		selectedBackgroundColor : '#a0a000'
	},
	childTemplates : [{
		type : 'Ti.UI.Label',
		bindId : 'title',
		properties : {
			color : '#ffffff',
			backgroundColor : 'transparent',
			font : {
				fontFamily : 'Arial',
				fontSize : 20,
				fontWeight : 'bold'
			},
			touchEnabled : 'false', // so events are propagated to parent
			left : 5,
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		}
	}, {
		type : 'Ti.UI.Label',
		bindId : 'value',
		properties : {
			color : '#ffffff',
			backgroundColor : 'transparent',
			font : {
				fontFamily : 'Arial',
				fontSize : 15
			},
			touchEnabled : 'false', // so events are propagated to parent
			left : 10,
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		}
	}],

};

var items = [{
	title : {
		text : 'Hello'
	},
	value : {
		text : 'How Are You'
	}

}, {
	title : {
		text : 'Hello'
	},
	value : {
		text : 'How Are You'
	}

}, {
	title : {
		text : 'Hello'
	},
	value : {
		text : 'How Are You'
	}

}, {
	title : {
		text : 'Hello'
	},
	value : {
		text : 'How Are You'
	}

}];

var section = Ti.UI.createListSection({
	items : items
});

var list = Ti.UI.createListView({
	sections : [section],
	templates : {
		'template' : myTemplate
	},
	defaultItemTemplate : 'template',
	backgroundColor : '#000'
});

var win = Ti.UI.createWindow({
	title : 'ListView'
});
win.add(list);
win.open();
