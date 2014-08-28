WebCalendar.CalController = Ember.ArrayController.extend({

	CurrentDate: function(){ 
		var today = new Date(); 
	},

	Cal: function(month, year){
		if(isNaN(month) || month === null){
			this.month = date.current_date().getMonth();
		} else {
			return month;
		}

		if(isNaN(year) || year === null){
			this.year = date.current_date().getYear();
		} else {
			return year;
		}

		// this.month = (isNaN(month) || month == null) ? date.current_date().getMonth() : month;
		// this.year = (isNaN(year) || year == null) ? date.current_date().getYear() : year;
	},

	updateContent: function() {
		return this.get('model').content;
	}.property('model')
});
