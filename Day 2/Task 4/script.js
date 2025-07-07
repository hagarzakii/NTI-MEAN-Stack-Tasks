//Task Four 

const isValidName = (name) => String(name).length >= 2;
const isValidPhone = (phone) => /^[\d\s\\(\)]{11,}$/.test(phone);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getValidInput = (message, validationFn, error) => {
  let input;
  do {
    input = prompt(message);
    if (input === null) return null;
    if (!validationFn(input)) alert(error);
  } while (!validationFn(input));
  return input;
};

const collectInfo = () => {

  const name = getValidInput(
    "Enter your full name (at least 2 characters):",
    isValidName,
    "Invalid name Please enter at least 2 characters."
  )
  if (name === null) return;

  const phone = getValidInput(
    "Enter your phone number (e.g., 012345678912):",
    isValidPhone,
    "Invalid phone number! Use digits only."
  )
  if (phone === null) return;

  const email = getValidInput(
    "Enter your email (e.g., user@example.com):",
    isValidEmail,
    "Invalid email! Format: user@example.com"
  )
  if (email === null) return;

  console.log(`Welcome, ${name}\nPhone: ${phone}\nEmail: ${email}`);
}

collectInfo();