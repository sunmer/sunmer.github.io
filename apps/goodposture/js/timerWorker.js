var interval;

onmessage = function(e) {
	if(e.data == 'start') {
		startTimer();
	}

	if(e.data == 'stop') {
		clearInterval(interval);
	}
	
	if(e.data == 'restart') {
		clearInterval(interval);
		startTimer();
	}
}

startTimer = function() {
	interval = setInterval(function() {
		postMessage(0)
	}, 1000);
}