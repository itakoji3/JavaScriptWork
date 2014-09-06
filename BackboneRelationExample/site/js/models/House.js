House = Backbone.RelationalModel.extend({
	// The 'relations' property, on the House's prototype. Initialized separately for each
	// instance of House. Each relation must define (as a minimum) the 'type', 'key' and
	// 'relatedModel'. Options include 'includeInJSON', 'createModels' and 'reverseRelation'.
	relations: [
		{
			type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
			key: 'occupants',
			relatedModel: 'Person',
			includeInJSON: Backbone.Model.prototype.idAttribute,
			collectionType: 'PersonCollection',
			reverseRelation: {
				key: 'livesIn'
			}
		}
	]
});

