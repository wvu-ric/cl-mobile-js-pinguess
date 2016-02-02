var pinCode = "0049";


function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function check(count){
 return count === 49
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
