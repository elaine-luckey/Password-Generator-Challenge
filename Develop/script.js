// Set character length to be an empty string
var characterLength = "";

// Set choiceArray to be an empty array -> this is to take the entry from the user and fill it into the array
var choiceArray = [];

// Defining all the array for special characters, lowercase, uppercase, and numbers
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '_', '~', '`', '=', '?', '<', '>', ':', '/', '|'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newPass = generatePassword();
  passwordText.value = newPass;
  return newPass;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
};

function getPrompts(){

  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Password length must be written in the form of a number and must be 8 - 128 characters digits. Please try again!");
    return false;
  }

if (confirm("Would you like lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowerCaseArray);
}

if (confirm("Would you like uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(upperCaseArray);
}

if (confirm("Would you like special characters in your password?")) {
  choiceArray = choiceArray.concat(specialCharacterArray);
}

if (confirm("Would you like numbers in your password?")) {
  choiceArray = choiceArray.concat(numArray);
}

return true;
};


