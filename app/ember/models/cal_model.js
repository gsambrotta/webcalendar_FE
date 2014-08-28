WebCalendar.Cal = DS.Model.extend({
	name: DS.attr('string'),
	days_label: DS.attr('array'),
	months_label: DS.attr('array'),
	days_per_month: DS.attr('array')

});


WebCalendar.Cal.FIXTURES = [
	{	
		"id": 1,
		"name": "Giorgia",

		"days_label": ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

		"months_label": ['January', 'February', 'March', 'April',
	                     'May', 'June', 'July', 'August', 'September',
	                     'October', 'November', 'December'],

	    "days_per_month": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
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

