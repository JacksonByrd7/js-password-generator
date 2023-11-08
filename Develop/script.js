// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 10
var choiceArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "*", "&"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

function generatePassword () {
  console.log("You clicked the generate password button");



  return "Generated Password Placeholder";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


