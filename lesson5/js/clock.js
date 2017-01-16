function Clock(opts) {
	var elem = opts.elem;
	var interval = 0;
	
	this.start = function () {
		if(interval > 0) return;
		interval = setInterval(render, 500);
	}
	
	this.stop = function () {
		clearInterval(interval);
		interval = 0;
	}
	
	function render () {
		var d = new Date();
		elem.innerHTML = d.toLocaleString().split(', ')[1];
	}
}
