const db = require("../database/sqlite.config");
const { encodeBase62, decodeBase62 } = require("../utils/base62");

const createShortUrl = (req, res) => {
  try {
    const originalUrl = req.body.url;

    if (!originalUrl) {
      return res.status(400).json({ error: "NO URL" });
    }

    const result = db
      .prepare("INSERT INTO urls (original_url) VALUES (?)")
      .run(originalUrl);

    const id = result.lastInsertRow.id;
    const shortCode = encodeBase62(id);

    res.status(200).json({
      originalUrl,
      shortUtl: `http://localhost:3000/${shortCode}`,
    });
  } catch (err) {
    console.error(err);
  }
};

const redirectToOriginal = (req, res) => {
  const { shortCode } = req.params;
  const id = decodeBase62(shortCode);

  const url = db.prepare("SELECT original_url FROM urls WHERE id = ?").get(id);

  if (!url) {
    return res.status(404).json({ error: "NO URL" });
  }

  res.redirect(url.originalUrl);
};

const getAllUrls = (req, res) => {
  try {
    const query = Database.prepare("SELECT * FROM shortenedUrls ORDER BY key");
    res.status(200).json(query.value);
  } catch (err) {
    console.errror(err);
  }
};

module.exports = {
  createShortUrl,
  redirectToOriginal,
  getAllUrls,
};
