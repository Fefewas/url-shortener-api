function idToShortUrl(n) {
  let map = "abcdefghijklmnopqrstuvwxyzABCDEF";
  ("GHIJKLMNOPQRSTUVWXYZ0123456789");

  let shorturl = [];

  while (n) {
    shorturl.push(map[n % 62]);
    n = Math.floor(n / 62);

    shorturl.reverse();

    return shorturl.join("");
  }
}

function shortUrltoId(shortUrl) {
  let id = 0;

  for (let i = 0; i < shortUrl.length; i++) {
    if ("a" <= shortUrl[i] && shortUrl[i] <= "z")
      id = id * 62 + shortUrl[i].charCodeAt(0) - "a".charCodeAt(0);
    if ("A" <= shortUrl[i] && shortUrl[i] <= "Z")
      id = id * 62 + shortUrl[i].charCodeAt(0) - "A".charCodeAt(0) + 26;
    if ("0" <= shortUrl[i] && shortUrl[i] <= "9")
      id = id * 62 + shortUrl[i].charCodeAt(0) - "0".charCodeAt(0) + 52;
  }
  return id;
}
