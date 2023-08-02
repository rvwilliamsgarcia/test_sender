/**
 * 
 */

function sendFunc() {
	var inputVal = document.getElementById("data").value;	
	console.log("took input val of " + inputVal);

	require(["DS/PlatformAPI/PlatformAPI"], function(API){	//uses PlatformAPI method publish with topic "display" to send data
		API.publish("display", inputVal);					//inputVal to receiver.js, which will be captured by method subscribe
	});														//of the same topic, calling receiveFunc when the data is received.

	console.log("sent!");
}

var MyWidget = {
	onLoad: function(){console.log("loading...");},
};

widget.addEvent("onLoad", MyWidget.onLoad);

myButton = document.getElementById("sendButton");
myButton.addEventListener("click", sendFunc);	//waits for click event to run sendFunc