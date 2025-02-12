export function isEmail(value) {
  return value.includes('@');
}

export function isValidEmail(value){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return regex.test(value);
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
