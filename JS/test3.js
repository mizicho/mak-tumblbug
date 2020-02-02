function regular_triangle(size){
	var result = "";

	for (var i = 1; i < size * 2; i+=2) {
		for (var j = 1; j < ((size * 2) - i) / 2 ; j++) {
			result += " ";
		}
		for( var l=1; l<=i;l++){
			result += "*";
		}
		for (var k = 1; k < ((size * 2) - i) / 2; k++) {
			result += " ";
		}
		result += "\n";
	}
	console.log(result);
}
regular_triangle(10)