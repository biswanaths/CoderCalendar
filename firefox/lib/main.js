var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");



var newsfeed = panels.Panel({
  width: 500,
  height: 500,
  contentURL: self.data.url("popup.html"),
  contentScriptFile: [self.data.url("jquery.js"),self.data.url("popup.js"),self.data.url("pace.js")]
});


var button = buttons.ActionButton({
  id: "ContestTracker",
  label: "Displays upcoming coding contests from various platforms",
  icon: {
    "16": "./icon16.gif",
    "32": "./icon16.gif"
  },
  onClick: popup 
})


function popup(){
  newsfeed.show({ position: button });
 };


newsfeed.port.on("postClicked", function (text) {
  //open new tab with link
  console.log(text);
  tabs.open("http://"+text);
});