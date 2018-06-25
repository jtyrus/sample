
const limit = 3;
var calls = 0;

module.exports.alert = function( message ) {
	
	calls++;
	if (calls > limit)
		return false;

	console.log(message);
	return true;
}