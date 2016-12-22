function init() {
	var tabControl = new TabControl('tabControl');
	tabControl.setStructure({
		'tab1':{
			'label':'вкладка №1',
			'content':'чё-та какой-то текст в первой вкладке'
		},
		'tab2':{
			'label':'вкладка №2',
			'content':'чё-та какой-то текст во второй вкладке'
		},
		'tab3':{
			'label':'вкладка №3',
			'content':'чё-та какой-то текст в третьей вкладке'
		}
	});
}
