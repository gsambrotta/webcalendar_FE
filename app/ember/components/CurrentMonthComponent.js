WebCalendar.CurrentMonthComponent = Ember.Component.extend({
	classNames: ['current-month'],
	
	today: new Date(),
  data: function(){
  	var today = this.get('today');
    return console.log("calendar", today, this.setCalendar());
	}.property('today'),

  
	setCalendar: function(showMonth){ 

  	var today = this.get('today');
    var currentYear = today.getFullYear();
  	var currentMonth = today.getMonth(); //month in number
    var currentDayOfWeek = today.getDay();
    var firstDayCurrentMonth = new Date(1, currentMonth, currentYear); //first day of current month
	
		this.dateNames();
    var showMonth = monthNamesArray[currentMonth]; //current month srting
		console.log("monthName", showMonth);

    var showWeekDay = daysLabel[currentDayOfWeek]; //current day of the week
    console.log("daysLabel", showWeekDay);

    var numbDayInMonth = daysPerMonth[currentMonth]; //how many days are in the current month
    console.log("daysPerMonth", numbDayInMonth);

    //Array with all the day of the current month
    days = [];
    for(i = 0; i = numbDayInMonth.length ; i++){
        console.log('days', days);
        return days = days[i];
    };

    // Check which DayOfTheWeek is the firstDayOfTheMonth,
    // then insert in the right coloumn
    // and then loop all the days, display them in the cells till the lastDayOfTheMonth

	},

	dateNames: function(currentMonth){
  		monthNamesArray = [ 
    			"January", 
    			"February", 
    			"March", 
    			"April", 
    			"May", 
    			"June",
      		"July", 
      		"August", 
      		"September", 
      		"October", 
      		"November", 
      		"December" 
    	],

      daysPerMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],

      daysLabel = [
          "Sun", 
          "Mon", 
          "Tue", 
          "Wed", 
          "Thu", 
          "Fri", 
          "Sat"
      ];
  }



});