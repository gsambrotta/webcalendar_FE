WebCalendar.CalController = Ember.ArrayController.extend({

	actions: {
		selectedMonth: function(){
			//code
		}
	},

	CurrentDate: function(){ 
		var today = new Date(); 
	},

	updateContent: function() {
		return this.get('model').content;
	}.property('model')
});
