
var app = app || {};

// 1. Default
app.View1 = Backbone.View.extend();

// 2. tagName
app.View2 = Backbone.View.extend({
    tagName: 'li'
});

// 3. HTML Page上
app.View3 = Backbone.View.extend({
    el: '#view3',

    render: function() {
    	this.$el.html('<h3>Child-of-view3</h3>').addClass('ppp');
    	return this;
    }
});

// 4. Sub Viewの場合はどうする
app.SubView4 = Backbone.View.extend({
    tagName: 'li',

    render: function() {
    	this.$el.html('This is a li').wrap('ul');
    	return this;
    }
});

