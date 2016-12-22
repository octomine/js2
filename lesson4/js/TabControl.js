TabControl = function (containerName) {
	this.container = $('#'+containerName);
	var struct;
	var selected = 'tab1';
	
	this.setStructure = function (s) {
		struct = s;
		var cnt = 1;
		this.container.append('<div id="tabHolder"/>');
		while (struct['tab'+cnt]) {
			$('#tabHolder').append('<div id="tab'+cnt+'"/>');
			$('#tab'+cnt).text(struct['tab'+cnt].label);
			$('#tab'+cnt).addClass('tab');
			
			cnt ++;
		}
		
		this.container.append('<div id="contentHolder"/>');
		$('#contentHolder').addClass('content');
		$('#contentHolder').text(struct[selected].content);
		
		$('#'+selected).toggleClass('selected');
		$('#tabHolder').click(processClick);
	}
	
	processClick = function (e) {
		$('#'+selected).toggleClass('selected');
		selected = e.target.id;
		$('#'+selected).toggleClass('selected');
		$('#contentHolder').text(struct[selected].content);
	}
}