//Task Four 

const isValidName = (name) => {
  const str = String(name);
  return str.length >= 2 && !/^\d+$/.test(str);
};

const isValidPhone = (phone) => {
  return /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(phone);
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getValidInput = (message, validationFn, error) => {
  let input;
  do {
    input = prompt(message);
    if (input === null) return;
    if (!validationFn(input)) alert(error);
  } while (!validationFn(input));
  return input;
};

const collectInfo = () => {

  const name = getValidInput(
    "Enter your name (at least 2 characters):",
    isValidName,
    "Invalid name Enter at least 2 characters."
  )
  if (name === null) return;

  const phone = getValidInput(
    "Enter your phone number (ex: 012345678912):",
    isValidPhone,
    "Invalid phone number Use numbers only (ex: 012345678912)"
  )
  if (phone === null) return;

  const email = getValidInput(
    "Enter your email (ex: user@example.com):",
    isValidEmail,
    "Invalid email! Format: user@example.com"
  )
  if (email === null) return;

  console.log(`Welcome, ${name}\nPhone: ${phone}\nEmail: ${email}`);
}

collectInfo();