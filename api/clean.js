exports.clean = string => {
  const alphaNumeric = string.replace(/[^0-9A-Za-z']+/g," ");
  const lowerCase = alphaNumeric.toLowerCase();
  return lowerCase;
}
