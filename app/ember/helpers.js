Handlebars.registerHelper('calRow', function(items, options) {
  var html = "<ul>";
  for(var i=0, l=items.length; i<l; i++) {
    html = html + "<li>" + options.fn(items[i]) + "</li>";
  }
  return html + "</ul>";
});
//return Ember.Handlebars.helpers.boundIf.call(this, "calRow", options);