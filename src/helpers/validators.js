const DIGITS_EXPRESSION = /^[0-9]+(\.[0-9]+)*$/;

export const isDecimal = (value) => DIGITS_EXPRESSION.test(value);
