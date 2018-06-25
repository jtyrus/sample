const chai = require('chai');

const unique = require('../src/unique');

describe('Unique Util', function() {

	var arr = [];
	var max;

	it('should return only unique values from an array', function() {
		
		givenMaxValue(200)
		givenArray(max/2);

		whenGettingUniqueValues();

		thenNoValuesAreEqual();

	});

	function whenGettingUniqueValues() {
		arr = unique.getUniqueValues(arr);
	}

	function thenNoValuesAreEqual() {

		var check = [];
		for (var i=0; j=arr.length, i<j; i++) {

			// make sure value isn't present
			chai.expect(check.includes(arr[i])).to.equal(false);

			// insert new value into array
			check.push(arr[i]);
		}

	}

	function givenMaxValue(value) {
		max = value;
	}

	function givenArray(size) {
		for (var i=0; j=size, i<j; i++) {
			arr.push(anyNumber(max));
		}
	}

	function anyNumber(max) {
		return Math.floor(Math.random() * max * 2) - max;
	}
});