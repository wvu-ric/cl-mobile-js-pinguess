var pinCode = "9999";

// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
function leftPad(number, targetLength) {
  //it is the main function of the script
    var output = number + '';
    while (output.length < targetLength) {
      // while the output lenght is less than the targeted length, the output will be turned into a 4 digit pin
        output = '0' + output;
    }
    return output;
}

function check(combo){
  if(pinCode == combo) {
    return true;
  }
  else {
    return false;
  }

}

var found = false;
var count = 0;
while(!found && count < 10000){
// run the code for up to 10000 times and run it until it is found
var output = leftPad(count, 4);
found = check(output);

count++;
if(found == true) {
alert(output)

}

}
// for loop you know how many times it can run
// while loop is while the input is true, then run until then
//
