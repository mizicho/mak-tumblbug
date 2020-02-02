function tree(size){
var result = "";

for(var i=1;i<=size;i++){
    result =""
  for(var j=1;j<=i;j++){
    result += "*";
    console.log(result);
  }
}
}
//tree(20)


function half_square(size){
	var result = "";
	
	for(var i=1;i<=size;i++){
		result += "*";
		console.log(result);
	}
}
	half_square(20)