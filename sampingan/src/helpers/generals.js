export const containsNumber = (str) => {
  return /\d/.test(str);
}

export const containsSpecialChars = (str) => {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}