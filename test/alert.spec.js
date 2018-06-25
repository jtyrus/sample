const chai = require('chai');


describe('Limited Alert', async function() {

	var fired;
	var limitedAlert;

	it('should make alert if limit has not been reached', function() {
		
		givenNewAlert();
		givenAlertIsFired(anyNumberBetween(0, 2));
		thenNextAlertIs(true);

	});

	it('should not alert more than configured limit', function() {

		givenNewAlert();
		givenAlertIsFired(anyNumberBetween(3, 100));
		thenNextAlertIs(false);

	});

	function givenNewAlert() {
		limitedAlert = require('../src/alert');
	}

	function givenAlertIsFired(times) {

		for (var i=0; i<times; i++) {
			limitedAlert.alert(`Fire : ${i}`);
		}

	}

	function thenNextAlertIs(fired) {
		chai.expect(limitedAlert.alert('Fire')).to.equal(fired);
	}

	function anyNumberBetween(min, max) {
		return Math.floor(Math.random() * max) + min;
	}
});