WebCalendar.CurrentMonthComponent = Ember.Component.extend({
	classNames: ['current-month'],
	
	today: new Date(),
  data: function(){
  	var today = this.get('today');
    return console.log("calendar", today, this.setCalendar());
	}.property('today'),

  
	setCalendar: function(monthView){ 
    this.dateNames(); //Why I HAVE to Call it?


  	var today = this.get('today');
    var currentYear = today.getFullYear();
  	var currentMonth = today.getMonth(); //month in number
    var currentDayOfWeek = today.getDay();
    var firstDay = new Date(currentYear, currentMonth, 1); //first day of current month
    var firstDayOfWeek = daysLabel[firstDay.getDay()]; // first dayOfTheWeek of current month
	  var showMonth = monthNamesArray[currentMonth]; //current month string
    var showWeekDay = daysLabel[currentDayOfWeek]; //current day of the week
    var totDayInMonth = daysPerMonth[currentMonth]; //how many days are in the current month

    console.log("firstDay:", firstDay);
    console.log("firstDayOfWeek:", firstDayOfWeek);
    console.log("monthName", showMonth);
    console.log("daysLabel", showWeekDay);
    console.log("daysPerMonth", totDayInMonth);

    //Array with all the day of the current month
    days = [];
    for(i = 1; i <= totDayInMonth; i++){
       days.push(i);
    }
    return days;
    console.log('days', days);

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