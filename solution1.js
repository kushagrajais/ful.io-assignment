/*WAP to check if the given contact number is valid or invalid using regular
expressions-
(Summary: Different country has a different type of representation on how they write their contact
numbers, and the same number can be written in all kinds of other formats, so you have to
analyse if the given number is valid or not based on your understanding).
Examples of different formats of numbers found on websites:
● 2124567890
● 212-456-7890
● (212)456-7890
● (212)-456-7890
● 212.456.7890
● 212 456 7890
● +12124567890
● +12124567890
● +1 212.456.7890
● +212-456-7890
● 1-212-456-7890
As we can see above these are all the same numbers written in a different format, but they all are
valid numbers. If you cannot prove all of them to be valid numbers, hoping to have at least 5 of
them correctly to pass this.
HINT: The standard format is - [+][country code][area code][local phone number]
*/

function isValidContactNumber(contactNumber) {
  // Regular expression to match valid phone number formats
  const regex = /^(\+\d{1,3})?(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\(\d{3}\)-\d{3}-\d{4}|\d{3}\.\d{3}\.\d{4}|\d{3} \d{3} \d{4})$/;

  return regex.test(contactNumber);
}

// Test cases
const contactNumbers = [
  "2124567890",
  "212-456-7890",
  "(212)456-7890",
  "(212)-456-7890",
  "212.456.7890",
  "212 456 7890",
  "+12124567890",
  "+1 212.456.7890",
  "+212-456-7890",
  "1-212-456-7890"
];

contactNumbers.forEach(number => {
  const isValid = isValidContactNumber(number);
  console.log(`${number} is ${isValid ? "valid" : "invalid"}`);
});
