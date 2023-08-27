/* Method Type: Instance Method */

/**
 * Syntax: charCodeAt(index)
 */

/**
 * Return value: An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.
 */

const greeting = "AS-Salamu 'Alaikum";

console.log(
  `The character code ${greeting.charCodeAt(7)} is equal to ${greeting.charAt(
    7
  )}`
);
// -> The character code 109 is equal to: m

console.log(
  `The character code ${greeting.charCodeAt(-1)} is equal to ${greeting.charAt(
    -1
  )}`
);
// -> The character code NaN is equal to: ''

console.log(
  `The character code ${greeting.charCodeAt(100)} is equal to ${greeting.charAt(
    100
  )}`
);
// -> The character code NaN is equal to: ''

console.log(
  `The character code ${greeting.charCodeAt(
    greeting.length - 2
  )} is equal to ${greeting.charAt(greeting.length - 2)}`
);
// -> The character code NaN is equal to: u
