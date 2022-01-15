//Declarations
var lenghtPass;
// Assignment Code
var generateBtn = document.querySelector("#generate");
//characters for passwords 
var upper = Array.from(Array(26)).map((e,i) => i + 65);
var ABCarray = upper.map((x) => String.fromCodePoint(x));
var lower = Array.from(Array(26)).map((e,i) => i + 97);
var abcarray = lower.map((x) => String.fromCodePoint(x));
var digits = Array.from(Array(10)).map((e,i) => i + 48);
var numbersarray = digits.map((x) => String.fromCodePoint(x));
var specialarray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// empty arrays
var resultArray = [];
var userPassword = [];
// password prompts and questions, 
// also saves the characters types to be used in password
function confirmAction(){
  lenghtPass = prompt("How much number of Character you want between 8 and 128?");
  if (lenghtPass >= 8 && lenghtPass <= 150 ){
    var numbers = confirm ("you want numbers in your password?");
    if (numbers){ 
      resultArray = resultArray.concat(numbersarray);
    }
    var uppercases = confirm ("you want Uppercases in your password?");
    if (uppercases){
      resultArray = resultArray.concat(ABCarray);
    } 
    var lowercases = confirm ("you want lowercases in your password?");
    if (lowercases){
      resultArray = resultArray.concat(abcarray);
    }
    var characters = confirm ("you want special characters in your password?");
    if (characters){
      resultArray = resultArray.concat (specialarray)
    }
    alert("Thank you")
    console.log(resultArray);
  }
  else{
    alert("Try again");
  }   
}

function generatePassword(){
  confirmAction();
  for (var i = 0; i < lenghtPass; i++){
    userPassword.push (resultArray[Math.floor(Math.random()*resultArray.length)]);
  }
  return userPassword.join("");

}

// Write password to the #password input
  function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(resultArray);
