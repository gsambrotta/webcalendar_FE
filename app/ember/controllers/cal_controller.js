WebCalendar.CalController = Ember.ArrayController.extend({
	getMonthDays: function(){
		return this.get("today") + 1;
	}.property('today')

});
