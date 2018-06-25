const toEmit = {};

const on = function(name, callback) {
	toEmit[`${name}`] = callback;
}

const emit = function(name) {
	if (toEmit[`${name}`] !== undefined)
		toEmit[`${name}`]();
	else {
		console.error('Event does not exist!');
		throw new Error('Event does not exist!');
	}
}

module.exports = {on, emit};