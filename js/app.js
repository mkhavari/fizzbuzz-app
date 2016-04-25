$(document).ready(function(){
	for (var i = 1; i <= 100; i++) {
		var x = i;
		var y = (x % 3);
		var z = (x % 5);
		var w = (x % 15);
		if (w === 0) {
   			document.write('Fizz Buzz');
   		}
		else if (z === 0) {
   			document.write('buzz');
   		}   		
   		else if (y === 0) {
   			document.write('fizz');
   		}
   		else {document.write(i);
   		}  		
};
});