// From https://github.com/BalestraPatrick/PebbleConfigurationExample

Pebble.addEventListener("ready",function(event) {
  console.log("AlfaSlab App Ready");
});

Pebble.addEventListener("showConfiguration",function(event) {
  Pebble.openURL("http://www.planetpratt.com/aspebble/settings.html");
});

Pebble.addEventListener("webviewclosed",function(event) {
  console.log(event.response);
  var responseFromWebView = decodeURIComponent(event.response);
  var settings = JSON.parse(responseFromWebView);
  Pebble.sendAppMessage(settings);
});