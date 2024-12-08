console.log("HELLO-WORLD");

console.log("");
console.log("1");
// QUESTION NUMBER 01 :  USING STRINGS; /////////////////////////////////////////////////////////////////////////////////////////
console.log("USING STRINGS:");
var firstname = prompt("ENTER YOUR FIRST NAME:");
var lastname = prompt("ENTER YOUR LAST NAME:");
var fullname = firstname + " " + lastname;
console.log("YOUR NAME IS :"  ,fullname);

console.log("");
console.log("2");
// QUESTION NUMBER 02 : COUNTING LENGTH OF SRINGS; /////////////////////////////////////////////////////////////
console.log("COUNTING LENGTH OF STRINGS:");
var favoritePhone = prompt("Enter your favorite mobile phone model:");
var lengthOfString = favoritePhone.length;

console.log("My favorite phone is: " + favoritePhone);
console.log("Length of string: " + lengthOfString);


console.log("");
console.log("3");
// QUESTION NUMBER 03 : FINDING INDEX OF A STRING; /////////////////////////////////////////////////////////////
console.log("FINDING INDEX OF A SRING:");
var pakistan = "PAKISTANI";
var indexof = pakistan.indexOf("N");
console.log("The index of 'n' in the word 'Pakistani' is:" , indexof);


console.log("");
console.log("4");
// QUESTION NUMBER 04: FINDING INDEX OF LAST INDEX OF SRING ; ///////////////////////////////////////////////
console.log("FINDING LAST INDEX OF STRING:");
var word = "Hello World";
var lastIndexOfL = word.lastIndexOf("l");

console.log("The last index of 'l' in the word 'Hello World' is: " + lastIndexOfL);


console.log("");
console.log("5");
// QUESTION NUMBER 05 : FINDIND THE CHARACTER AT 3RD INDEX OF SRING ; ////////////////////////////////////////
console.log("FINDIND THE CHARACTER AT 3RD INDEX OF SRING:");
var word = "pakistani";
var _3rd_indexof = word.charAt(3);
console.log("THE CHARACTER AT THE 3rd INDEX  IN THE WORD 'PAKISTANI' IS: "  +  _3rd_indexof);


console.log("");
console.log("6");
// QUESTION NUMBER 06 : REPLACING STRINGS ////////////////////////////////////////////////////////////////////
console.log("REPLACING STRINGS");
var orignalword = "HYDERABAD";
var update_word = orignalword.replace("HYDER", "ISLAM");
    console.log("ORIGNAL WORD IS :" , orignalword);
    console.log("UPDATED WORD IS :" , update_word);


console.log("");
console.log("7");
// QUESTION NUMBER 07 : CONVERTING STRING TO NUMBER : ////////////////////////////////////////////////////////
console.log("CONVERTING STRING TO NUMBER :");
var string = "472"
var str = "472";
var num = Number(str);
console.log("value: "  + string)
console.log("Type of Value: " + typeof string)
console.log("Value: " + num);               
console.log("Type of Value: " + typeof num);


console.log("");
console.log("8");
// QUESTION NUMBER 08 : CONVTERING LOWERCASE STRING TO UPPERCASE STRING: //////////////////////////////////////////
console.log("CONVTERING LOWERCASE STRING TO UPPERCASE STRING:")
var input = prompt("PLEASE ENTER ANY WORD:");
console.log("ORIGNAL WORD : " , input);
console.log("UPPERCASE WORD : " , input.toUpperCase());


console.log("");
console.log("9");
// QUESTION NUMBER 09 : CONVERTING CHARACTER TO CAPITAL LETTERS : //////////////////////////////////////////////
console.log("CONVERTING CHARACTER TO CAPITAL LETTERS:");
// Prompt the user for input
var userInput = prompt("Enter your text:");
var titleCase = userInput
  .toLowerCase()               
  .split(" ")                 
  .map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1); 
  })
  .join(" ");

console.log("User input: " + userInput);
console.log("Title case: " + titleCase);


console.log("");
console.log("10");
// QUESTION NUMBER 10 : COVERTING VARIABLE NUMBER TO STRING: ////////////////////////////////////////////////////
console.log(" COVERTING VARIABLE NUMBER TO STRING:");
var num = 35.36;
var numString = num.toString();
var result = numString.replace('.', '');

console.log("Number: " + num);
console.log("Result: " + result);


console.log("");
console.log("11");
// QUESTION NUMBER 11 : JS PASSWORD VALIDATION //////////////////////////////////////////////////////////////////
console.log("JS PASSWORD VALIDATION:");
function isValidPassword(password) {
    // Check if the password has at least one letter and one number
    var hasLetter = /[a-zA-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);

    // Check if the password is at least 6 characters long
    var isLongEnough = password.length >= 6;

    // Check if the password does not start with a number
    var startsWithLetter = isNaN(password[0]);

    // Combine all conditions
    return hasLetter && hasNumber && isLongEnough && startsWithLetter;
}

while (true) {
    var password = prompt("Enter password:");
    if (isValidPassword(password)) {
        console.log("Password accepted.");
        break;
    } else {
        if (password.length < 6) {
            console.log("Password must be at least 6 characters long.");
        }
        if (!/[a-zA-Z]/.test(password)) {
            console.log("Password must contain at least one alphabet.");
        }
        if (!/[0-9]/.test(password)) {
            console.log("Password must contain at least one number.");
        }
        if (!isNaN(password[0])) {
            console.log("Password cannot begin with a number.");
        }
        console.log("Please enter a valid password.");
    }
}


///////////////////////////// CHAPTER 21-25 COMPLETED \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\