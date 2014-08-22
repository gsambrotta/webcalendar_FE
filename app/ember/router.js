WebCalendar.Router.map(function() {
	this.resource('index', {path: '/'}, function(){
		this.resource('location', {path: '/location'});
		this.resource('organization', {path: '/organization'});	
	});
});