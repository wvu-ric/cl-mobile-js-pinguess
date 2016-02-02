var pinCode = "0049";

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
    if(combo == pinCode){
      return true;
    }
    else {return false;}
}

var found = false;
var count = 0;
while(!found && count < 10000){
var attempt = leftPad(count, 4);
  found = check(attempt);
  count++;
}

if (found) {
	alert("Cleared to make purchase");
}
