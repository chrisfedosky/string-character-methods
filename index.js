//In JavaScript, you can easily access the ASCII code of a character using the charCodeAt() method. This method is called on a string and returns the ASCII code of the character at a specified index. Let’s take a look at an example://

let letter = "A";
console.log(letter.charCodeAt(0))


let symbol = "!";
console.log(symbol.charCodeAt(0))

//While charCodeAt() helps you retrieve the ASCII value of a character, the fromCharCode() method allows you to do the opposite: convert an ASCII code into its corresponding character.//

let char = String.fromCharCode(65);
console.log(char);

let char1 = String.fromCharCode(97);
console.log(char1);

//These methods are particularly useful when you need to manipulate or compare characters based on their ASCII values. For instance, you might use charCodeAt() to check if a character is uppercase, lowercase, or a digit by comparing its ASCII value. On the other hand, fromCharCode() can be used to dynamically generate characters from their ASCII codes.//