/* Method Type: Instance Method */

/**
 * Syntax: charAt(index)
 */

/**
 * Return value: A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.
 */

const greeting = "AS-Salamu 'Alaikum";

console.log(`The character at index ${7} is ${greeting.charAt(7)}`);
// -> 'm'

console.log(`The character at index ${-1} is ${greeting.charAt(-1)}`);
// -> ''

console.log(`The character at index ${100} is ${greeting.charAt(100)}`);
// -> ''

console.log(
  `The character at index ${greeting.length - 2} is ${greeting.charAt(
    greeting.length - 2
  )}`
);
// -> 'u'
