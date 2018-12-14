var sideSum1 = function(firstvalue, secondvalue) {
    return firstvalue + secondvalue;
  };
  
  var sideSum2 = function(secondvalue, thirdvalue) {
    return secondvalue + thirdvalue;
  };
  
  var sideSum3 = function(firstvalue, thirdvalue) {
    return firstvalue + thirdvalue;
  };
  function check(){
  
     var firstvalue=document.getElementById('one').value;
     var secondvalue=document.getElementById('two').value;
     var thirdvalue=document.getElementById('three').value;
     
     var text;
      if(sideSum1(firstvalue,secondvalue) <= thirdvalue || sideSum2(secondvalue,thirdvalue) <= firstvalue || sideSum3(firstvalue,thirdvalue) <= secondvalue){
         text="Scalene Triangle."
     }
     else if(firstvalue === secondvalue && secondvalue === thirdvalue){
         text = "Equilaterial Triangle.";
     }
      //Equivalent Triangle
  
     else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
         text="Isoscele Triangle.";
     }
     //Isoscele Triangle
     else if(firstvalue!==secondvalue && firstvalue!==thirdvalue &&secondvalue!==thirdvalue){
         text="it is not triangle."
     }
     //Scalene Triangle
  
  
     else{
         text = "Not a Triangle.";
     }
     document.getElementById('demo').innerHTML = text;
  }