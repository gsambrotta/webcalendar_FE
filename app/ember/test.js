var html = '';
var day = 1;
for(i = 1; i <= 6; i++){ //6 rows
    html += '<tr id="days-row">';
    for(j = 1; j <= 7; j++){ //7 coloumns
        html += '<td>'; 
        if(day <= totDayInMonth && (i > 1 || j >= firstDayOfWeekNumber )){
            html += day;
            day++;
        } else {
            html += '&nbsp;';
        }
        html += '</td>';
    }
    if(day >= totDayInMonth){
        break;
    }
    html += '</tr>'; 
}  
html + '</tr>';



//Solution 1
//controller
WebCalendar.CalController = Ember.ArrayController.extend({
    itemController: 'days'

});

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

//helper
Handlebars.registerHelper('calRow', function(items, options) {
  for(i = 1; i <= 6; i++){  
      var html = "<tr id='days-row'>";
      for(j = 1; j <= 7; j++) {
        html = html + "<td>";
        if(day <= totDayInMonth){
            html += day;
        } else {
            html += '&nbsp;'; 
        }
        html += "</td>";
      }
     html + "</tr>";
  }
});

//cal.hbs
{{calRow today}}



//Solution 2 - View
//controllers
WebCalendar.CalController = Ember.ArrayController.extend({
    itemController: 'days'

});

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

//days_view
WebCalendar.DaysView = Ember.View.extend({
  controller: WebCalendar.DaysController,
  templateName: 'cal',
  tagName: 'tbody',

  fillDays: function(){
        for(i = 1; i <= 6; i++){  
          var html = "<tr id='days-row'>";
          for(j = 1; j <= 7; j++) {
            html = html + "<td>";
            if(day <= totDayInMonth){
                html += day;
            } else {
                html += '&nbsp;'; 
            }
            html += "</td>";
          }
          html + "</tr>";
        }
        return html;
  }

});

//cal.hbs
{{view.fillDays}}//where I want my days to be display

