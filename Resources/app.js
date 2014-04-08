// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var webview = Titanium.UI.createWebView({url: 'https://privatbok.meteor.com/'});
var window = Titanium.UI.createWindow();
function printChildren() {
    console.log(webview.children, webview.url);
    setTimeout(printChildren, 1000);
}
setTimeout(printChildren, 1000);

webview.on('beforeload', function (event) {
    console.log('beforeload: navigationType=' + event.navigationType + '; url=' + event.url);
});
window.add(webview);
window.open();

setTimeout(function () {
    webview.evalJS('var oldOpen = window.open; window.open = function(){console.log("OPENING!!"); oldOpen.apply(this, arguments);}');
}, 5000);
