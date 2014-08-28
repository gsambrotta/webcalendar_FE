window.WebCalendar = Ember.Application.create();

WebCalendar.ApplicationAdapter = DS.FixtureAdapter.extend();

WebCalendar.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});