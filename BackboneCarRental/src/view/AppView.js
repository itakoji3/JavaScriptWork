var CarRental = CarRental || {};

// Note: carCollection should be passed into this view
// new CarRental.AppView({ carCollection: xxx });
CarRental.AppView = Backbone.View.extend({

	el: '#car-rental-app',

    carCollection: undefined,

	// $(jQuery) can be used in a View
	initialize: function() {
        //this.carCollection = this.carCollection || {};
        this.$carType = this.$('#carType');
        this.$rentalFee = this.$('#rentalFee');
        this.$capacity = this.$('#capacity');

        // this.listenTo( this.model, 'add', this.addOneCar);
        this.listenTo( this.model, 'add', this.addOneCar);

        this.model.fetch();
	},

	events: {
		'click #new-car': 'createOnEnter',
	},

	render: function() {
		// this.addOneCar( this.model );
		this.addAllCar();
	},

	addOneCar: function( aCar ) {
		var view = new CarRental.CarView({
			model: aCar
        });

        $('#carList').append( view.render().el );
	},

	addAllCar: function() {
        $('#carList').html('');
        //this.carCollection.each(this.addOneCar, this);
        // CarRental.carCollection.each(this.addOneCar, this);
        this.model.each(this.addOneCar, this);
	},

	// 
	// This refers to view because the event is linked with events property.
	createOnEnter: function(event) {
		var temp = this.newAttributes();
		this.model.create( this.newAttributes());
        this.clearAttributeFields();
	},

	newAttributes: function() {
        return {
        	carType: this.$carType.val(),
        	rentalFee: this.$rentalFee.val(),
        	capacity: this.$capacity.val()
        }
	},

	clearAttributeFields: function() {

	}

});