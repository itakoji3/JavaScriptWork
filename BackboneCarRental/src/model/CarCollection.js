var CarRental = CarRental || {};

CarRental.CarCollection = Backbone.Collection.extend({
    model: CarRental.Car,

    localStorage: new Backbone.LocalStorage('kitani-car-rental')

});