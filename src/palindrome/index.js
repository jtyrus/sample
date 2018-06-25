module.exports.checkForPalindrome = function( intputString ) {
	
	if (typeof intputString !== 'string' && !Array.isArray(intputString)) {
		console.error(`error="incorrect input", input="${intputString}",type=` + typeof intputString);
		throw new Error('Incorrect parameters! Please pass a string or array.');
	}
	var result = false;
	var half = intputString.length/2;
	for (var i=0; j=half, i<j; i++) {
		if(intputString[i] !== intputString[intputString.length - i - 1])
			return false;

	}
	return true;

}