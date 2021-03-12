exports.count = function(string) {
  let map = {};
  const words = string.split(" ");

  for(let i = 0; i < words.length; i++) {
    const item = words[i];
    map[item] = (map[item] + 1) || 1;
  }

  return map;
}
