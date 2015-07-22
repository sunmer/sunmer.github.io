var timeLeft = 1200000;
var titleStandUp = 'Stand up!';
var worker = new Worker('js/timerWorker.js');
worker.postMessage(0);
var timeContainer = $('time');
var blink = false;
var min, sec;

worker.onmessage = function(e) {
	formatTime(timeLeft -= 1000);

	if(timeLeft < 0) {
		setInterval(function() {
			document.title == titleStandUp ? document.title = '!' : document.title = titleStandUp;
		}, 500);
	} else {
		document.title = min + ':' + sec;
	}
	
	timeContainer.text(min + ':' + sec);
};

var formatTime = function(time) {
	min = Math.floor((time % 36e5) / 6e4),
	sec = Math.floor((time % 6e4) / 1000);
        
}