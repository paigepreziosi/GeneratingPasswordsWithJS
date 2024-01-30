// variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "V", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "<", ">", "?", ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generatedPassword = "";
var choices = [""]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// funtions and prompts to create password criteria 
var okLowercase = confirm("Would you like your password to contain lowercase letters?");
if (okLowercase) {
  choices = choices.concat(lowercase)
}

var okUppercase = confirm("Would you like your password to contain uppercase letters?");
if (okUppercase) {
  choices = choices.concat(uppercase)
}

var okSymbols = confirm("Would you like your password to contain special symbols?");
if (okSymbols) {
  choices = choices.contact(symbols)
}

var okNumbers = confirm("Would you like your password to contain numbers?");
if (okNumbers) {
choices = choices.concat(numbers)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


