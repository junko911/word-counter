exports.clean = string => {
  const alphabet = string.replace(/[^A-Za-z']+/g," ");
  const lowerCase = alphabet.toLowerCase();
  return lowerCase;
}
