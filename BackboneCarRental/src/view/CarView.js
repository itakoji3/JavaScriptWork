
var CarRental = CarRental || {};

CarRental.CarView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		this.listenTo( this.model, 'change', this.render );
		this.listenTo( this.model, 'destroy', this.remove );
	},

	carTemplate: _.template( $('#car-template').html() ),

	events: {
		"click .destroy" : "destroy",
		"click .rentalACar" : "rentACar",
		"click .returnACar" : "returnACar",
		'click .startRental': 'startRental',
		'click .cancelRental': 'cancelRental'
	},

    render: function() {
    	this.$el.html( this.carTemplate( this.model.toJSON() ) );
    	return this;
    },

    destroy: function() {
    	this.model.destroy();
    },

    rentACar: function() {
    	// TODO: One more state has to be added to the model ?
    	//       or how to handle this ? This is not a persistent state
    	this.$('.RentalInfoView').prop('hidden', false);
    	this.controlRentalButtons( true );
    },

    returnACar: function() {
    	this.model.set("isCheckedOut", false);
    	this.model.save();
    },

    showRentalView: function( isCheckedOut ) {
    	this.$('.RentalView').prop('hidden', !isCheckedOut);
    },

	startRental: function() {
    	var newCheckedOutStatus = !this.model.get("isCheckedOut");
    	this.model.set("isCheckedOut", newCheckedOutStatus);
    	this.model.set( this.newAttributes() );
    	this.model.save();
	},

	cancelRental: function() {
    	// this.$('.RentalInfoView').prop('hidden', true);
    	// this.controlRentalButtons( false );
	},

	newAttributes: function() {
        return {
        	first: this.$('.first').val(),
        	second: this.$('.second').val(),
        	dayStart: this.$('.dayStart').val(),
        	dayEnd: this.$('.dayEnd').val()
        }
	},

	controlRentalButtons: function( isStartRental ) {
    	this.$('.rentalACar').prop('disabled', isStartRental );
    	this.$('.returnACar').prop('disabled', !isStartRental);
	}


});