Person = Backbone.RelationalModel.extend({
	relations: [
		{ // Create a (recursive) one-to-one relationship
			type: Backbone.HasOne,
			key: 'user',
			relatedModel: 'User',
			reverseRelation: {
				type: Backbone.HasOne,
				key: 'person'
			}
		}
	],

	initialize: function() {
		// do whatever you want :)
	}
});

