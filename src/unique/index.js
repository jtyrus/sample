module.exports.getUniqueValues = function( inputArray ) {
	
	if (typeof inputArray !== 'string' && !Array.isArray(inputArray)) {
		console.error(`error="incorrect input", input="${inputArray}",type=` + typeof inputArray);
		throw new Error('Incorrect parameters! Please pass a string or array.');
	}

	var unique = {};

	for (var i=0; j=inputArray.length, i<j; i++) {

		unique[`${inputArray[i]}`] = inputArray[i];

	}

	return Object.values(unique);

}