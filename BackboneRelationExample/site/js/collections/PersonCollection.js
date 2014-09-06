
PersonCollection = Backbone.Collection.extend({
	model: 'Person',

	url: function( models ) {
		// Logic to create a url for the whole collection, or a set of models.
		// See the tests, or Backbone-tastypie, for an example.
		return '/person/' + ( models ? 'set/' + _.pluck( models, 'id' ).join(';') + '/' : '' );
	},

	localStorage: new Backbone.LocalStorage('person_storage')	
});
