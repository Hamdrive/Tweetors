export const initialInputValidation = {
  name: "",
  email: "",
  password: "",
};

export const initialErrors = {
  nameError: "",
  emailError: "",
  passwordError: "",
};

export const inputReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return { ...state, name: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CLEAR_INPUTS":
      return initialInputValidation;
    default:
      return state;
  }
};

export const errorReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME_ERROR":
      return { ...state, nameError: payload };
    case "EMAIL_ERROR":
      return { ...state, emailError: payload };
    case "PASSWORD_ERROR":
      return { ...state, passwordError: payload };
    case "CLEAR_ERRORS":
      return initialErrors;
    default:
      return state;
  }
};
