var MyAlgo = MyAlgo || {};

QUnit.module("Top N");

QUnit.test("", function( assert ) {
	var testData = [1, 2, 3, 4, 5];

	var result = topN(testData, 2);
	assert.equal(result[0], 5);
	assert.equal(result[1], 4);
});

QUnit.test("", function( assert ) {
	var testData = [10, 20, 3, 4, 5];

	var result = topN(testData, 2);
	assert.equal(result[0], 20);
	assert.equal(result[1], 10);
});

