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
  
    var firstvalue=parseInt(document.getElementById('one').value);
    var secondvalue=parseInt(document.getElementById('two').value);
    var thirdvalue=parseInt(document.getElementById('three').value);
    
    var text;
    if(sideSum1(firstvalue,secondvalue) <= thirdvalue || sideSum2(secondvalue,thirdvalue) <= firstvalue || sideSum3(firstvalue,thirdvalue) <= secondvalue){
       text="it is not triangle"
   }