export const firstNameValidaitionOptions = {
  required: 'First Name cannot be empty',
  maxLength: {
    value: 80,
    message: 'First Name must be fewer than 80 characters',
  },
};

export const lastNameValidationOptions = {
  required: 'Last Name cannot be empty',
  maxLength: {
    value: 80,
    message: 'Last Name must be fewer than 80 characters',
  },
};

export const emailValidationOptions = {
  required: 'Email cannot be empty',
};

export const passwordValidationOptions = {
  required: 'Password cannot be empty',
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,40}/,
    message:
      'Password must be between 8 and 40 characters and include at least one lowercase character, at least one uppercase character, at least one number, and at least one special character.',
  },
};
