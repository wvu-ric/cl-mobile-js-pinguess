var pinCode = "0051";



function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

// count = 51
function check(count){
  var testPinCode = leftPad(count, 4) // 0051
  return testPinCode == pinCode
}

var found = false;
var count = 0;
while(!found && count < 10000){
  var isPin = check(count);
	if(isPin) {
    found = true;
  }
  count++;
}

if (found===true){
	alert("it's true! ");
}
