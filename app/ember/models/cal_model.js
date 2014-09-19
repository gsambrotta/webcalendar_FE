WebCalendar.Cal = DS.Model.extend({
	name: DS.attr('string'),
	days_label: DS.attr('array'),
	months_label: DS.attr('array'),
	days_per_month: DS.attr('array')

});


WebCalendar.Cal.FIXTURES = [
	{	
		"id": 1,
		"name": "Test",
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

