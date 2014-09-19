WebCalendar.CalController = Ember.ArrayController.extend({

	actions: {
		selectedMonth: function(){
			//code
		}
	},

	updateContent: function() {
		return this.get('model').content;
	}.property('model')
});
