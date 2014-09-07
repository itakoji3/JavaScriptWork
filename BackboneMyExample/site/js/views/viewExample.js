
var app = app || {};

// 1. Default
app.View1 = Backbone.View.extend();

// 2. tagName
app.View2 = Backbone.View.extend({
    tagName: 'li'
});

// 3. HTML Page上
app.View3 = Backbone.View.extend({
    el: '#view3'
});

// 4. Sub Viewの場合はどうする
app.SubView4 = Backbone.View.extend({
    tagName: 'li'
});

