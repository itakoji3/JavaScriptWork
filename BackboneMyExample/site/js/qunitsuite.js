test('view1', function() {
	var view1 = new app.View1();
	equal( "object", typeof(view1.el), "typeof view1 === object" );
	equal( HTMLDivElement, view1.el.constructor, "el is HTMLDivElement" );
    var expected = "DIV";
	equal( view1.el.tagName, expected, "default tagName (DIV)" );
})

test('view2', function() {
	var view2 = new app.View2();
	equal( HTMLLIElement, view2.el.constructor, "el is HTMLLiElement" );
    var expected = "LI";
	equal( view2.el.tagName, expected, "tagName li" );
})

test('view3', function() {
	var view3 = null;
	equal( view3, null, 'null3' );

})

