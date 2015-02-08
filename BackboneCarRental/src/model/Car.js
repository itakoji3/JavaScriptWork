var CarRental = CarRental || {};

CarRental.Car = Backbone.Model.extend({
	defaults: {
		isCheckedOut: false,
		carType: "Unknown Car Type",
		rentalFee: 0
		//
		,
    	first : "Taro",
    	second: "Urashima",
    	address: "Mura",
    	dayStart: "",
    	dayEnd: ""
    	//
	}
});
