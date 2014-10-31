WebCalendar.DateController = Ember.ObjectController.extend({
    formattedWeeks: function() {
        var i;
        var monthNumber = this.get('monthNumber');
        var daysInMonth = this.get('daysInMonth');
        var totDayInMonth = daysInMonth[monthNumber];

        console.log(monthNumber);//9
        console.log(totDayInMonth);//31

        var days = [];
        for (i = 1; i <= totDayInMonth; i++) {
          days.push(i);
        }
        console.log(days);

        var weeks = [];
        var fullWeeks = Math.ceil(days.length / 7);
        //fullWeeks = 4

        var len = days.length, out = [], j = 0;
        while (j < len) {
            var size = Math.ceil((len - j) / fullWeeks --);
            out.push(days.slice(j, j + size));
            j += size;
        }
        console.log(out);
        return out;


      }.property('monthNumber', 'daysInMonth'),

});
