function create() {
    var win = Titanium.UI.createWindow({
        title : "hello win",
        layout : 'vertical'
    });
 
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
 
    var scrollView = Ti.UI.createScrollView({
        contentWidth : 'auto',
        contentHeight : 'auto',
        showVerticalScrollIndicator : true,
        showHorizontalScrollIndicator : true,
        height : '80%',
        width : '80%'
    });
 
    win.backgroundImage = "KS_nav_ui.png";
 
    var view = Titanium.UI.createView({
        width : Ti.UI.FILL,
        height : GetHeight(400),
        top : GetHeight(5),
 
    });
    scrollView.add(view);
    win.add(scrollView);
 
    var leambadge = Titanium.UI.createImageView({
        image : "KS_nav_ui.png",
        top : GetHeight(1),
 
        width : GetWidth(37),
        height : GetHeight(37),
    });
    view.add(leambadge);
 
    var leamfixtures = Titanium.UI.createImageView({
        image : "/images/Leamfixtures.png",
        top : GetHeight(38),
 
        width : GetWidth(130),
        height : GetHeight(325),
    });
    view.add(leamfixtures);
 
    win.open();
 
    // trying to create a button to close the window
    var btnClose = Titanium.UI.createButton({
        title : 'Close',
        bottom : 20,
 
        height : 30,
        width : 75,
        font : {
            fontFamily : 'Trebuchet MS',
            fontSize : 10
        }
 
    });
    win.add(btnClose);
    btnClose.addEventListener('click', function() {
        win.close();
    });
 
    return win;
}
 
module.exports = create;