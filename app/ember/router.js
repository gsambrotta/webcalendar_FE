WebCalendar.Router.map(function() {
	this.resource('index', {path: '/'}, function() {
		this.resource("cal", {path: '/'});
		this.resource("location", {path: '/location'});
		this.resource("organization", {path: '/organization'});
	});
});


WebCalendar.IndexRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('dates');
	}
});

WebCalendar.CalRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('dates');
	}
});
