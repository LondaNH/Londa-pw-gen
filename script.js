// Assignment code here
var characterLength = 8;
var responsesArr = [];

var specialCharacterArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ")", "(", "/", "+", "-", "~"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value = "Your password does not meet criteria requirements. Please try again :)";

}

}

function generatePassword () {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * responsesArr.length);
    password = password + responsesArr[randomIndex];
  }
  return password;

}

function getPrompts(){
  responsesArr = [];

    characterLength = parseInt(prompt("How many characters do you want? Please choose between 8-128 characters."));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Hi my friend, character length has to be a number between 8-128. Please select again.");
      return false;
    }

   if (confirm("Do you want your password to include numbers?")) {
      responsesArr = responsesArr.concat(numberArr);
   }

    if (confirm("Do you want your password to include lower case letters?")) {
      responsesArr = responsesArr.concat(lowerCaseArr);
    }

    if (confirm("Do you want your password to include upper case letters?")) {
      responsesArr = responsesArr.concat(upperCaseArr);
    }

    if (confirm("Do you want your password to include special characters?")) {
      responsesArr = responsesArr.concat(specialCharacterArr);
    }
    return true;
}