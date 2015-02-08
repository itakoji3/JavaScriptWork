describe("My template", function() {
    beforeEach(function() {
    	this.template = _.template($('#car-template').html());
        this.aCar = new CarRental.Car({
        	carType: 'Honda',
        	rentalFee: 6000
        });
    });
    it("should include <div class=\"view\">", function() {

        console.log(this.aCar.toJSON());
        //'<div class="view">
        //   <input class="toggle" type="checkbox">
        //   <label>Honda</label>
        //   <button class="destroy"></button>
        // </div>
        // <input class="edit" value="Honda">'

        expect($('<div class="view"><p>aaa</p></div>')).toHaveHtml('<p>aaa</p>');
        expect(this.template(this.aCar.toJSON())).toContainElement('div, input');
        // Not pass below
        // expect(this.template(this.aCar.toJSON())).toContainElement('div');
        expect(this.template(this.aCar.toJSON())).toContainElement('label');
        expect(this.template(this.aCar.toJSON())).toHaveClass('view');
        expect(this.template(this.aCar.toJSON())).toContainHtml('<label>Honda</label>');
        expect(this.template(this.aCar.toJSON())).toContainHtml('<button class=\"destroy\"></button>');

    });

    it("should include <input class=\"edit\">", function() {
        expect(this.template(this.aCar.toJSON())).toHaveClass('edit');
        expect(this.template(this.aCar.toJSON())).toContainElement('div, input');
        // Not possible as of now 
        // expect(this.template(this.aCar.toJSON())).toContainElement('input').toHaveClass('edit');
    });
});

describe("CarView", function() {
	var aCar = new CarRental.Car({
       carType: 'Honda',
       rentalFee: 6000
	});
	var carView = new CarRental.CarView({
        model: aCar
	});

	it("should be a <div> element", function() {
		expect(carView.el).toEqual('div'); // jasmine-jquery
		// TODO: qunit-jquery ある？
	});

	it("should contain an element", function() {
		carView.render();
		console.log(carView.el);
		expect(carView.el).toEqual('div'); // jasmine-jquery
		// TODO: qunit-jquery ある？
	});
});


describe("CarCollectionView", function() {
	var carCollectionView = new CarRental.CarCollectionView({

	});

	it("should be a <ul> element", function() {
		expect(carCollectionView.el).toEqual('ul');
	});

	// it("should have several <li> element", function() {
		
	// 	carCollectionView.render();

	// 	expect(carCollectionView.el).toEqual('li');
	// });
});
