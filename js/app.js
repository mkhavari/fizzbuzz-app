$(document).ready(function(){
   function myFunction(){
      for (var i = 1; i <= q; i++) {
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
         }; 
      };
   };
var p = prompt("Please enter a number");
var q = parseInt(p);
myFunction();
});