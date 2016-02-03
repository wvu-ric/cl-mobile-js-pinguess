//"Pinguess" Assignment Josh Matheny
var pinCode = "1999";

// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
//LeftPad created to added leading zeros to pinCode if needed
function leftPad(pinCode, targetLength) {
    var count = pinCode.length;
    var output = pinCode;

    while (count < targetLength) {
        output = '0' + output;
        count++;
    }
    return output;
}
//Actually Calling and Running the LeftPad function
pinCode = leftPad(pinCode,4);
console.log(pinCode)

//Function defined to check a guess to see if it matches the given pinCode
function check(pinCode,guess){
         var numCode = Number(pinCode);
         var numGuess = Number(guess);
         var found = false;

         if (numCode == numGuess){
         found = true;
         console.log("Got Lucky!")
         alert("You got lucky, that is the Pin Code!")
       } else {
         alert("Sorry, that is not the Pin Code...")
       }
       return found;
     }

//Variable created to store a guess to the pin code
var guess =prompt("Input a guess of what you think the pin code is...");

//Calling defined function to see if guess matches the pin code
found = check(pinCode,guess)
console.log(found);

//While Loop Created to check the pin code by iterating through numbers to find it
         if (!found) {
         var check = 0;
         var numCode = Number(pinCode);
         while (!found && check < 10000){
         if (check == numCode) {
         found = true;
         //Added this line in to account while loop running an extra time after the pin code is found
         check = check-1;
         }
         check++;
         console.log(found);
         }
         alert("The pin code is equal to  " + check.toString());
         }
