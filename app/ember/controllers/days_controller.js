WebCalendar.DaysController = Ember.ObjectController.extend({
	getMonthDays: function(){
		var monthNumber = this.get("monthNumber");
		var daysInMonth = this.get("daysInMonth");
		var totDayInMonth = daysInMonth[monthNumber];
		//console.log(totDayInMonth);

		return totDayInMonth;
	}.property('monthNumber')

});
