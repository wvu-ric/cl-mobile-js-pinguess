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
	return (pinCode == combo);
}

var found = false;
var count = 0;
while(!found && count < 10000){
    count += 1;
    var combo = leftPad(count, 4)
    found = check(combo);
}

if (found) {
	alert('Your pin is: '+combo);
}
