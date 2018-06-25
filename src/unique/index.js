module.exports.getUniqueValues = function( inputArray ) {
	
	var unique = {};

	for (var i=0; j=inputArray.length, i<j; i++) {

		unique[`${inputArray[i]}`] = inputArray[i];

	}

	return Object.values(unique);

}