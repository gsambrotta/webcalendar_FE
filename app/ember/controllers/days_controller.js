WebCalendar.DaysController = Ember.ObjectController.extend({
	getMonthDays: function(){
		var monthNumber = this.get("monthNumber");
		var daysInMonth = this.get("daysInMonth");
		var totDayInMonth = daysInMonth[monthNumber];

		var days = [];
		for( i = 1; i < totDayInMonth; i++){
			days.push(i);
		}
		return days;

	}.property('monthNumber')
});
