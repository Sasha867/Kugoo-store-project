function validateIsEmpty(val: string) {
  return val.trim().length === 0 ? "You should type something" : "";
}

function validateHasNumbers(val: string) {
  return /^[0-9\s]+$/.test(val) ? "String should not contain only numbers" : "";
}

function validateMinLength(val: string) {
  return val.length < 3 ? "String length should be more than 3 chars" : "";
}

function validateOneUppercase(val: string) {
  return !/[A-Z]/.test(val)
    ? "String should have at least one upper case letter"
    : "";
}

function validateSpecSymbol(val: string) {
  return !/[$&+,:;=?@#|'<>.^*()%!-]/.test(val)
    ? "String should containt at least one special symbol"
    : "";
}

function validateNoSpaces(val: string) {
  return /\s/.test(val) ? "String should not contain any spaces" : "";
}

export const VALIDATION_TYPE = {
  IS_EMPTY: "IS_EMPTY",
  ONLY_NUMBERS: "ONLY_NUMBERS",
  MIN_LENGTH: "MIN_LENGTH",
  ONE_UPPERCASE: "ONE_UPPERCASE",
  ONE_SPEC_SYMBOL: "ONE_SPEC_SYMBOL",
  NO_SPACES: "NO_SPACES",
};

const VALIDATION_HANDLERS = {
  IS_EMPTY: validateIsEmpty,
  ONLY_NUMBERS: validateHasNumbers,
  MIN_LENGTH: validateMinLength,
  ONE_UPPERCASE: validateOneUppercase,
  ONE_SPEC_SYMBOL: validateSpecSymbol,
  NO_SPACES: validateNoSpaces,
};

// export const validate = (val :string, config ) => {
//     return config.reduce((validationMessage :string, validationFuncName) => {
//         return validationMessage ?
//             validationMessage :
//             VALIDATION_HANDLERS[validationFuncName](val);
//     }, '');
// };
