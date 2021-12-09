// Assignment code here

// takes user input string of a number >= 8 and <= 128 and returns an int of the desired password length
var passLength;
function getPassLength() {
    passLength = window.prompt("How long do you want your password? Enter a number 8 - 128");
    passLength = parseInt(passLength);
    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        return getPassLength();
    }
}

// generates random password when button is clicked
function generatePassword() {
    var randPassword = "";
    var charSet = "";
    // confirms what characters are wanted in random password
    var confirmCaps = window.confirm("Do you want you password to have uppercase letters? \n i.e ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var confirmLower = window.confirm("Do you want you password to have lowercase letters? \n i.e abcdefghijklmnopqrstuvwxyz");
    var confirmNum = window.confirm("Do you want you password to have numbers? \n i.e 1234567890");
    var confirmSpecial = window.confirm("Do you want you password to have special characters? \n i.e  !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

    getPassLength();

    // appends confirmed characters to the usable character set string
    if (confirmCaps) {
        charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (confirmLower) {
        charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
    }
    if (confirmNum) {
        charSet = charSet + "1234567890";
    }
    if (confirmSpecial) {
        charSet = charSet + " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    // if charSet has contents then random password is generated
    if (charSet) {
        for (let i = 0; i <= passLength; i++) {
            // gets char position at rounded down int of random number between 0 and length of the set of confirmed characters + 1 to include the last char in list since Math.floor
            var char = Math.floor(Math.random() * charSet.length + 1);
            // appends character at position 'char' to randPassword
            randPassword = randPassword + charSet.charAt(char);
        }
        return randPassword;
    }
    else {
        window.alert("Your password needs something to build with! Please confirm at least one option!");
        return generatePassword();
    }

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
