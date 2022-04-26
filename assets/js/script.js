// general plan
// prompt1: enter a password length between 8 - 128
// prompt2: 'Would you like to include lowercase?'
// prompt3: 'Would you like to include uppercase?'
// prompt4: 'Would you like to include numbers?'
// prompt5: 'Would you like to include special characters?'

// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate a password
const getPasswordLength = () => {
    // prompt1: enter a password length between 8 - 128 and store it as a variable
    // ?? if the password length is not a number or it is less than 8 or above than 128 characters, return an alert?
};

// a password criteria
const getPasswordCriteria = () => {
    // generate criteria
    // if no criteria is selected initialize loop counter (new criteria)? - retry

    // prompt2: 'Would you like to include lowercase?'
    // prompt3: 'Would you like to include uppercase?'
    // prompt4: 'Would you like to include numbers?'
    // prompt5: 'Would you like to include special characters?'};

    // validate each one prompt & make user to confirm the criteria
    // if any choice selected push into array

const createRandomPassword = () => {
  // select random characters from the array
  // get random symbol
  // get random index
  // get random character
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
