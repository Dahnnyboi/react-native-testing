export const VALIDATION = {
  required: 'This field is required',
  email: 'Please enter a valid email',
  password:
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
};

export const REGEX = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
};
