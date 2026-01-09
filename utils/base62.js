const BASE62_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const BASE62_LOOKUP = (() => {
  const map = {};
  for (let i = 0; i < BASE62_CHARS.length; i++) {
    map[BASE62_CHARS[i]] = i;
  }
  return map;
})();

function encodeBase62(id) {
  if (id === 0) return BASE62_CHARS[0];

  let result = "";
  while (id > 0) {
    result = BASE62_CHARS[id % 62] + result;
    id = Math.floor(id / 62);
  }

  return result;
}

function decodeBase62(code) {
  let id = 0;

  for (const char of code) {
    id = id * 62 + BASE62_LOOKUP[char];
  }
  return id;
}

module.exports = {
  encodeBase62,
  decodeBase62,
};
