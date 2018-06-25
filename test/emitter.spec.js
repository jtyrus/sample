const expect = require('chai').expect;

const emitter = require('../src/emitter');

describe('Emitter Checker', function() {

	it('should emit function on call', function() {
		var called = true;
		emitter.on('assertTrue', () => {

			expect(called).to.equal(false);
			called = true;

		});
		
		called = false;
		emitter.emit('assertTrue');
	});
	
	it('should throw an error if event does not exist', function() {
		var called = true;
		emitter.on('assertTrue', () => {

			expect(called).to.equal(false);
			called = true;

		});
		
		called = false;
		expect(emitter.emit.bind('assertTrue1')).to.throw('Event does not exist!');
	});

});