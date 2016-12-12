function ChessBoard(el) {
	var cellSide = 50;// сторона клетки 
	var padding = 20;// отступ по краям доски, на которых написаны буквы и цифры
	// привaтные, т.к. задаются один раз и больше не меняются
	var selectedCell;// активная ячейка, шахматная координата вида A1
	// устанавливая её через функцию там же подсвечивать ячкейку на доске
	
	el.style.padding = padding + 'px';
	
	var table = document.createElement('div');
	table.className = 'chess-board-table';
	table.style.width = 8 * cellSide + 'px';
	table.style.height = 8 * cellSide + 'px';
	el.appendChild(table);
	
	for(var i = 0; i < 8; i ++) {
		for(var j = 0; j < 8; j ++) {
			var cell = document.createElement('div');
			cell.id = String.fromCharCode(65 + j) + (8 - i);
			cell.className = (i + j) % 2 == 0 ? 'cell-white' : 'cell-black';
			cell.style.width = cell.style.height = cellSide - 4 + 'px';
			cell.style.left = cellSide * j + 'px';
			cell.style.top = cellSide * i + 'px';
			table.appendChild(cell);
		}
	}
	
	for(i = 1; i < 9; i ++) {
		var cn = document.createElement('div');
		cn.innerText = i;
		cn.className = 'letter';
		table.appendChild(cn);
		cn.style.left = - (padding + cn.clientWidth) / 2 - 1 + 'px';
		cn.style.top = table.clientHeight - i * cellSide + (cellSide - cn.clientHeight) / 2 + 'px';
		
		var cl = document.createElement('div');
		cl.innerText = String.fromCharCode(64 + i);
		cl.className = 'letter';
		table.appendChild(cl);
		cl.style.left = (i - 1) * cellSide + (cellSide - cl.clientWidth) / 2 + 'px';
		cl.style.top = 1 + table.clientHeight + (padding - cl.clientHeight) / 2 + 'px';
	}
	
	this.addEventListener = function (evt, callback) {
		table.onclick = function(e) {
			e.stopPropagation();
			callback({cell:e.target.id});
		}
	}
	
	this.setSelectedCell = function (cell) {
		if(selectedCell) document.getElementById(selectedCell).classList.toggle('cell-selected');
		selectedCell = cell;
		if(selectedCell) document.getElementById(selectedCell).classList.toggle('cell-selected');
	}
	
	this.getSelectedCell = function() {
		return selectedCell;
	}
}

function init() {
	var cb = new ChessBoard(document.getElementById('chessBoard'));
	cb.addEventListener('click', function (e) {
		cb.setSelectedCell(e.cell);
	});
}
