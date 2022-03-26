// Assignment code here

//Variables used for code
var allLower = "abcdefghijklmnopqrstuvwxyz";
var allUpper = allLower.toUpperCase();//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var allNum = "0123456789";
var allSpec = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var allChar = "";
//var password = ""; Going from global to local

//To get password length from user
var getPasswordLen = function(){
  var len = "";
  //Validation to get a length between 8 and 128
  while (len === "" || len === null || parseInt(len) < 8 || parseInt(len) > 128 || isNaN(len)) {
    len = prompt("Please enter the length of password. Must be between 8 and 128 characters.");
  }
  //console.log("You have chosen " + len);
  return len;
}

//Need boolean state for each characteristic
var isLower = false;
var isUpper = false;
var isNum = false;
var isSpec = false;

//var passLen = getPasswordLen(); Moving inside generatePassword function
// Generating password with atleast one characteristic
function generatePassword() {
  var passLen = getPasswordLen();
  while (isLower === false && isUpper === false && isNum === false && isSpec === false){
    isLower = window.confirm("Do you want lowercase letters?");
    if (isLower){
      allChar += allLower;
    }
    isUpper = window.confirm("Do you want uppercase letters?");
    if (isUpper){
      allChar += allUpper;
    }
    isNum = window.confirm("Do you want numbers?");
    if (isNum){
      allChar += allNum;
    }
    isSpec = window.confirm("Do want to use special characters? This includes ! #$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    if (isSpec){
      allChar += allSpec;
    }
  }
  
  //Creates random password from selected characteristics
  var password = ""; // Going from gloabl to local
  for(var i = 0; i < passLen; i++){
    var rand = Math.floor(Math.random() * allChar.length);
     password += allChar.substring(rand, rand + 1);
  }
  return password;
}
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
