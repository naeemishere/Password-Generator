// Assignment code here
var chars = {
    upperCase: ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialChars: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "~", "|", "<", ">", "=", "-", "_", "/", ":", ";", "?", "[", "]", "{", "}", "~"]
    }; ////////////////////////////////////
    var randomChars = function (array) {
      return array[Math.floor(Math.random() * array.length)];
    };/////////////////////////////////////
    //Create a function to select  characters to be included with a password.
    var clickOk = function () {
    var arrayofChars = [];
      var confirmUpperCase = "";
      var confirmLowerCase = "";
      var confirmNumbers = "";
      var confirmSpecialCharacters = "";
      var confirm = function () {
        // confirm if a user wants: Uppercase characters
        confirmUpperCase = confirm("Click OK to confirm including Uppercase characters.")
        // confirm if a user wants: Lowercase characters.
        confirmLowerCase = confirm("Click OK to confirm including Lowercase characters."),
        // confirm if a user wants: Numeric characters.
        confirmNumbers = confirm("Click OK to confirm including Numeric characters."),
        // confirm if a user wants: Special characters.
        confirmSpecialCharacters = confirm("Do you want your password to contain Special characters.");
      }
      confirm();
      while (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters) {
        window.alert("Click OK to Select at least one character!!!")
        //Once the user Clicks ok for at least one Characters, Random Password should generate!
        confirm();
      }
      var includeArry = function(outPut, addChars) {
        if (outPut) {
          includeChars = selectedCharacter.concat(addChars);
        } return includeChars;
      }
      selectedCharacter = includeArry(confirmUpperCase, chars.upperCase);
      selectedCharacter = includeArry(confirmLowerCase, chars.lowerCase);
      selectedCharacter = includeArry(confirmNumbers, chars.numeric);
      selectedCharacter = includeArry(confirmSpecialCharacters, chars.specialChars);
      return includeChars;
    }; /////////////////////////////////////////////
    var generatePassword = function(){
      var createdPassword = "";
      var randomPassword = parseInt(window.prompt("How Many Characters would you like your Password to contain?"));
      while (!randomPassword || !randomPassword < 8 || !randomPassword > 128); {
      window.alert("Please Try Again!!!")
      randomPassword = parseInt(window.prompt("How Many Characters would you like your Password to contain?"));
      // generatePassword();
    }
    var selectedPassword = clickOk();
      for (var i = 0; i < randomPassword; i++) {
       createdPassword += randomChars(selectedPassword);
    }
      return createdPassword;
    };/////////////////////////////////////////////////////
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