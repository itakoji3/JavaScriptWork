
describe("Car", function() {
	var car = new CarRental.Car({
//	    carType: 'Mazda'
	});
    describe("should be initialized ...", function() {
    	it("should be initialized to not rental.", function() {
    		expect( car.get("isCheckedOut") ).toEqual(false);
    	});

    	it("should have a Car Type.", function() {
    		expect( car.get("carType") ).not.toBe(undefined);
    	});

    	it("should be initialized to Unknown Car Type.", function() {
    		expect( car.get("carType") ).toBe('Unknown Car Type');
    	});

    	it("should have a Rental Fee.", function() {
    		expect( car.get("rentalFee") ).not.toBe(undefined);
    	});
    });
});

describe("CarCollection", function() {
    var carCollection = new CarRental.CarCollection({
//      carType: 'Mazda'
    });
});