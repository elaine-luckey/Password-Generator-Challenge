// Set character length to be an empty string
let characterLength = 8;

// Set choiceArray to be an empty array -> this is to take the entry from the user and fill it into the array
let choiceArray = [];

// Defining all the array for special characters, lowercase, uppercase, and numbers
const specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '_', '~', '`', '=', '?', '<', '>', ':', '/', '|'];
const lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Set generateBtn variable to get the "generate" id element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button -> event listener is the "click" and passing the writePassword function in the parameters
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // correctPrompts will return true or false
  let correctPrompts = getPrompts(); 

  //Setting the variable passwordText to get the password id element
  let passwordText = document.querySelector("#password");

  // Creating an if statement for correctPrompts if it is returned true from the correctPrompts function 
  if (correctPrompts) {
  
  // Creating a new variable called newPass to store the generatePassword function results, which is the randomized password that is generated
  let newPass = generatePassword();

  //Using the passwordText variable to set the value of the input element to newPass, which is the generated password
  passwordText.value = newPass;

  //Return the results of newPass
  return newPass;

  //else statement is used if the correctPrompts comes back false and will set the passwordText value to be an empty string to clear the text box
  } else {
    passwordText.value = "";
  }
}

//Creating a function to generate the password
function generatePassword() {

// Setting the variable password to be an empty string to fill later
  let password = "";

//for loop to increment through the number of character lengths that is given by the user
  for (let i = 0; i < characterLength; i++){

//Setting the variable randomIndex to generate a random index that can be used to select a random element from the choiceArray
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    
// Building a sting by progressively adding random characters from the choiceArray
    password = password + choiceArray[randomIndex];
  }

//Return the final password
  return password;
};

//Creating the getPrompts function
function getPrompts(){

//Setting choiceArray to be an empty array
  choiceArray = [];

//Setting the character length to be the inputted character length from user
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

//If the character length is not within the parameters given in the prompt, the return false and display an error message to try again
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Password length must be written in the form of a number and must be 8 - 128 characters digits. Please try again!");
    return false;
  }

//Combining the choiceArray with the lowerCaseArray based off of the user's answer in the prompts
if (confirm("Would you like lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowerCaseArray);
}

//Combining the choiceArray with the upperCaseArray based off of the user's answer in the prompts
if (confirm("Would you like uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(upperCaseArray);
}

//Combining the choiceArray with the specialCharacterArray based off of the user's answer in the prompts
if (confirm("Would you like special characters in your password?")) {
  choiceArray = choiceArray.concat(specialCharacterArray);
}

//Combining the choiceArray with the numArray based off of the user's answer in the prompts
if (confirm("Would you like numbers in your password?")) {
  choiceArray = choiceArray.concat(numArray);
}

//Return value of true for the getPrompts functions when called to the writePassword function
return true;
};


