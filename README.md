# string-character-methods
fCC JavaScript lecture work along

ASCII, short for American Standard Code for Information Interchange, is a character encoding standard used in computers to represent text. It assigns a numeric value to each character, which is universally recognized by machines.

In JavaScript, you can easily access the ASCII code of a character using the charCodeAt() method. This method is called on a string and returns the ASCII code of the character at a specified index.

Let’s take a look at an example:

let letter = "A";
console.log(letter.charCodeAt(0));  // Output: 65

In this example, A is the first character of the string, and calling charCodeAt(0) returns its ASCII value, 65.

You can also use this method with other characters to find their ASCII values:

let symbol = "!";
console.log(symbol.charCodeAt(0));  // Output: 33

Here, the ASCII code for the exclamation mark ! is returned as 33.

While charCodeAt() helps you retrieve the ASCII value of a character, the fromCharCode() method allows you to do the opposite: convert an ASCII code into its corresponding character.

Let's see this in action:

let char = String.fromCharCode(65);
console.log(char);  // Output: A

In this example, fromCharCode(65) converts the ASCII value 65 back to the character A.

Another example would be converting the number 97 to its corresponding lowercase letter:

let char = String.fromCharCode(97);
console.log(char);  // Output: a

These methods are particularly useful when you need to manipulate or compare characters based on their ASCII values.

For instance, you might use charCodeAt() to check if a character is uppercase, lowercase, or a digit by comparing its ASCII value.

On the other hand, fromCharCode() can be used to dynamically generate characters from their ASCII codes.