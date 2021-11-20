// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); {
  

}
//______________________________________________________________________________________   
// Write password to the #password input
function writePassword() {
  var passwordLength = askPasswordLength();
  alert(passwordLength);
  var isBasicValidation = askBasicValidation();
  alert(isBasicValidation);
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function askPasswordLength() {
  var answer = prompt("Please enter length of password,  8 to 128 characters", "");
  if (answer > 8 && answer < 128) {
   
    return answer;
  }
  return -1;
}

function askBasicValidation() {
  var isBasicValidation = true;
  var valAnswer = prompt("Would you like to include lowercase, uppercase, numeric, and/or special characters: yes/no", "yes");
  if (valAnswer === "yes")   {
      isBasicValidation = true;
  
  } else if(valAnswer ==="no") {
    isBasicValidation = false;

  }
return isBasicValidation;
}

function generatePassword(passwordLength) {
  var length = passwordLength;
  alert(passwordLength);
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZ123456789@!$
  
  ";
  var retVal="";
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);