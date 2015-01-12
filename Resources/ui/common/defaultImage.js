var win = Ti.UI.createWindow({backgroundColor: 'white'});
var myTemplate = {
     bindId: 'main',
    properties: {height: Ti.UI.SIZE},
    childTemplates: [
        {                            
            type: 'Ti.UI.ImageView', 
            bindId: 'image',           
            properties: {
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                defaultImage: 'appicon.png'
            }
        },
    ]
};
var listView = Ti.UI.createListView({
    templates: { 'template': myTemplate },
    defaultItemTemplate: 'template'
});
var sections = [];
var imageSection = Ti.UI.createListSection({ });
var imageDataSet = [
    {  image: {Image: 'http://oi58.tinypic.com/2ed1f0n.jpg'}},
     
];
imageSection.setItems(imageDataSet);
sections.push(imageSection);
listView.setSections(sections);
win.add(listView);
win.open();