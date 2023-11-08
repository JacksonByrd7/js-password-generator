// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8
var choiceArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "*", "&"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword () {
  console.log("You clicked the generate password button");

    var password = " ";
    for (var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length) ;
      password = password + choiceArr[randomIndex];
    }
  return password;
}
// Write password to the #password input
function writePassword() {
  var correctPrompts = generatePrompt();  //returns true or false

  if (correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePrompt() { //this function is ment to create prompts for each potential password criteria
  characterLength = parseInt(prompt ("What character length do you want for your password?(8-128"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //These paramaters should never be true, this is meant to check that
    alert("please select a number between 8 and 128");
    return; false;
  }

  if (confirm("Would you like lowercase letters in your password?") ) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
    if (confirm("Would you like uppercase letters in your password?") ) {
      choiceArr = choiceArr.concat(upperCaseArr);
   }
   if (confirm("Would you like special characters in your password?") ) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?") ) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
