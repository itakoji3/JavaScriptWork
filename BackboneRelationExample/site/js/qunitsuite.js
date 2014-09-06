test('Person', function() {
	var paul = new Person({
		id: 'person-1',
		name: 'Paul',
		user: { id: 'user-1', login: 'dude', email: 'me@gmail.com' }
	});

	// A User object is automatically created from the JSON; so 'login' returns 'dude'.
	equal( paul.get('user').get('login'), 'dude', 'user.login' );
})

test('House', function() {
	var ourHouse = new House({
		id: 'house-1',
		location: 'in the middle of the street',
		//occupants: ['person-1', 'person-2', 'person-5']
		occupants: ['person-1']
	});

	// 'ourHouse.occupants' is turned into a Backbone.Collection of Persons.
	// The first person in 'ourHouse.occupants' will point to 'paul'.
	notEqual( ourHouse.get('occupants'), null, 'ourHouse.occupants is not null' );
	equal( ourHouse.get('occupants').at(0).name, 'Paul', 'House.occupants.person-1.name' );

	//equal( ourHouse.get('occupants').at(1).name, '', 'House.occupants.person-2.name??' );

})

