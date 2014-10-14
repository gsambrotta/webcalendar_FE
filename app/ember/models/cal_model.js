WebCalendar.Dates = DS.Model.extend({
	today: DS.attr('date'),
	monthNumber: function(){
		var today =  this.get('today');
		return today.getMonth();
	}.property('today'),
	month: DS.attr('date'),
	year: DS.attr('date'),
	daysName: DS.attr('array'),
	daysInMonth: DS.attr('array')
});


WebCalendar.Dates.FIXTURES = [
	{	
		id: 1,
		today: new Date(), 
		month: moment().format('MMM'),
		year: moment().format('YYYY'),
		daysName: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		daysInMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
	}
];




DS.JSONTransforms.array = {
	serialize: function(jsonData) {
		if (Em.typeOf(jsonData) === 'array') {
			return jsonData;
		} else {
			return [];
		}
	},
	deserialize: function(externalData) {
		switch (Em.typeOf(externalData)) {
			case 'array':
				return externalData;
			case 'string':
				return externalData.split(',').map(function(item) {
					return jQuery.trim(item);
				});
			default:
				return [];
		}
	}
};

