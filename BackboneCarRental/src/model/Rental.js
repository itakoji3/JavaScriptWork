var CarRental = CarRental || {};

CarRental.Rent = Backbone.Model.extend({

    defaults: {
    	first : "Taro",
    	second: "Urashima",
    	address: "Mura",
    	dayStart: "",
    	dayEnd: ""
    }
});