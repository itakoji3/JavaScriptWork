var CarRental = CarRental || {};

QUnit.module("Car Rental View Test");

QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Car View create test", function( assert ) {
    this.aCarView = new CarRental.CarView({
    });

    // assert.equal(this.aCarView.el.tagName.toLowerCase(), 'li');
    assert.equal(this.aCarView.el.tagName.toLowerCase(), 'div');
});

QUnit.test( "template test", function( assert ) {
    var templ = _.template( '<div><%= test1 %></div>' );

    console.log( templ({ test1: 'ok' }) );

    assert.equal( templ({ test1: 'ok' }), '<div>ok</div>');
});