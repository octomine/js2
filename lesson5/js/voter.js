function Voter (opts) {
	var elem = opts.elem;
	var votes = elem.querySelector('.vote');
	
	elem.onclick = function (evt) {
		changeVote(evt.target.closest('.up') ? 1 : (evt.target.closest('.down') ? -1 : 0));
	}
	
	changeVote = function (c) {
		votes.innerHTML = Number(votes.innerHTML) + c;
	}
	
	this.setVotes = function (n) {
		votes.innerHTML = n;
	}
}
