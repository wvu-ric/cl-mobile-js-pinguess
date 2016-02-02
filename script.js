var pinCode = "0004";

// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function check(combo){
	var num = leftPad(4,4)
  if(num == pinCode) {
    return true;
  }
    else return false;
}

var found = false;
var count = 0;
while(!found && count < 10000){
	if(check(count)) {
    found = true;
  }
    else count++
}

var pin = leftPad(4,4);

if (found) {
	alert("Your pin is: " + pin);
}
