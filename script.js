// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
// completed with lots of help

var pinCode = "0029";

function leftPad(number, targetLength) {
    var output = number + "";
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
  }

var found = false;
var count = 0;
while(!found && count < 10000){
  var pinCode4 = leftPad(count,4);
  count++;
  if (pinCode4 == pinCode){
    found = true;
  }
}
if (found) {
	alert("The pincode is" + " " + pinCode);
}
