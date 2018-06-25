module.exports.checkForPalindrome = function( intputString ) {
	
	var result = false;
	var half = intputString.length/2;

	for (var i=0; j=half, i<j; i++) {
		if(intputString[i] !== intputString[intputString.length - i - 1])
			return false;

	}
	return true;

}