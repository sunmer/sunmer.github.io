var timeLeft = 1200000;
var titleStandUp = 'Stand up!';

var worker = new Worker('js/timerWorker.js');
worker.postMessage('start');

var timeContainer = $('time');
var interval = false;
var _min, _sec, min, sec;

worker.onmessage = function(e) {
	formatTime(timeLeft);

	if(timeLeft < 0) {
		timeContainer.text('now!');
		$('.restart').fadeIn();

		if(!interval) {
			interval = window.setInterval(function() {
				document.title == titleStandUp ? document.title = '!' : document.title = titleStandUp;
				console.log("omg")
			}, 1000);
		}
		
		worker.postMessage('stop');

		return;
	} else {
		document.title = min + ':' + sec;
	}
	
	timeContainer.text(min + ':' + sec);

	timeLeft = timeLeft - 1000;
};

var formatTime = function(time) {
	_min = Math.floor((time % 36e5) / 6e4);
	_sec = Math.floor((time % 6e4) / 1000);
	
	if(_min.toString().length == 1) {
		min = "0" + _min;
	} else {
		min = _min;
	}

	if(_sec.toString().length == 1) {
		sec = "0" + _sec;
	} else {
		sec = _sec;
	}
}

$('.restart').click(function() {
	window.clearInterval(interval);
	interval = false;
	timeLeft = 1200000;
	document.title = 'Good posture!';
	worker.postMessage('restart');
});