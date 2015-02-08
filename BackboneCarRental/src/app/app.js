var CarRental = CarRental || {};

CarRental.shop = {
    start: function( cars ) {
    	console.log('Entry Point');
    	var aCar = new CarRental.Car({
    		isCheckedOut: true,
    		carType: 'Honda',
    		rentalFee: 7000
    	});
        cars.add( aCar );

    	var aCar2 = new CarRental.Car({
    		carType: 'Mazda',
    		rentalFee: 7000
    	});
        cars.add( aCar2 );

    	new CarRental.AppView({
    		model: cars
    	}).render();
    }
};

CarRental.carsInShop = new CarRental.CarCollection();

// StartUp
$(function() {
	CarRental.shop.start( CarRental.carsInShop );
});