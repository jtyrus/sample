const expect = require('chai').expect;

const checker = require('../src/palindrome');

describe('Palindrome Checker', function() {

	var input = '';

	it('should return true if input is a palindrome', function() {
		givenInputIsAPalindrome();

		expect(checker.checkForPalindrome(input)).to.equal(true);
		
	});

	it('should return false if input is not a palindrome', function() {
		givenInputIsRandom();
		expect(checker.checkForPalindrome(input)).to.equal(false);
	});


	function givenInputIsAPalindrome() {

		var firstHalf = randomString(100);
		var secondHalf = '';

		for (var i=firstHalf.length - 1; j=0, i>=j; i--) {
			secondHalf += firstHalf[i];
		}
		input = firstHalf + secondHalf;
	}

	function givenInputIsRandom() {
		input = randomString(100);
	}

	function randomString(size) {

		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var string = '';

		for (var i=0; j=size, i<j; i++) {
			string += letters[Math.floor(Math.random() * letters.length)];
		}

		return string;
	}

});