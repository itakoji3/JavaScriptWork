test('view1', function() {
	var view1 = new app.View1();
	equal( "object", typeof(view1.el), "typeof view1 === object" );
	equal( HTMLDivElement, view1.el.constructor, "el is HTMLDivElement" );
    var expected = "DIV";
	equal( view1.el.tagName, expected, "default tagName (DIV)" );
})

test('view2', function() {
	var view2 = new app.View2();
	console.log(view2.el);
	equal( HTMLLIElement, view2.el.constructor, "el is HTMLLiElement" );
    var expected = "LI";
	equal( view2.el.tagName, expected, "tagName li" );
	equal( view2.render().el, '<li></li>', "tagName li" );
})

test('view3', function() {
	var view3 = new app.View3();
	console.log(view3.el);
	notEqual( view3.el, null, 'view3 not null' );
    var expectedHTML = '<h3>Child-of-view3</h3>';
	equal( view3.$el.html(), expectedHTML, "html() of view3" );
	equal( view3.$el.text(), 'Child-of-view3', "text() of view3" );
	//console.log(view3.$el.html({a: 'valA', b: 'valB'}).html());
})

test('subview4', function() {
	var view4 = new app.SubView4();
    console.log(view4.el);
    view4.render();
    console.log(view4.el);
    view4.$el.wrap('ul');
    console.log(view4.el.val());
    var expectedHTML = '<ul><li>This is subview4</li></ul>';
    equal( view4.$el.html(), expectedHTML, "html() of subview4");

})