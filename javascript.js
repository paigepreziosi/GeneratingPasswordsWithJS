// variables

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "V", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "<", ">", "?", ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var okLowercase = confirm("Would you like your password to contain lowercase letters?");
var okUppercase = confirm("Would you like your password to contain uppercase letters?");
var okSymbols = confirm("Would you like your password to contain special symbols?");
var okNumbers = confirm("Would you like your password to contain numbers?");
var passwordLength = prompt("Choose a password length between 8 and 128 characters!");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
