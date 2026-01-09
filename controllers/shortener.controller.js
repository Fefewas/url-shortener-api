const db = require("../database/sqlite.config");
const { encodeBase62, decodeBase62 } = require("../utils/base62");

const createShortUrl = (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: "NO URL" });
    }

    const result = db
      .prepare("INSERT INTO urls (original_url) VALUES (?)")
      .run(originalUrl);

    const id = result.lastInsertRowid;
    const shortCode = encodeBase62(id);

    console.log("ID:", id);
    console.log("SHORT CODE:", shortCode);

    res.status(201).json({
      originalUrl,
      shortUrl: `http://localhost:3000/api/${shortCode}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

const redirectToOriginal = (req, res) => {
  const { shortCode } = req.params;
  const id = decodeBase62(shortCode);

  const url = db.prepare("SELECT original_url FROM urls WHERE id = ?").get(id);

  if (!url) {
    return res.status(404).json({ error: "NO URL" });
  }

  res.redirect(url.original_url);
};

module.exports = {
  createShortUrl,
  redirectToOriginal,
};
