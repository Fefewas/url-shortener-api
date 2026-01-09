const db = require("../database/sqlite.config");

const insertUrl = (req, res) => {
  try {
    const url = req.body.url
    const insert = db.prepare(
      "INSERT INTO shortenedUrls (key,value) VALUES (?, ?)"
    );
    insert.run(1, url);
    res.status(200).json(insert.value)
  } catch (err) {
    console.error(err);
  }
};

const getAllUrls = (req, res) => {
  try {
    const query = Database.prepare("SELECT * FROM shortenedUrls ORDER BY key");
    res.status(200).json(query.value)
  } catch (err) {
    console.errror(err);
  }
};

module.exports = {
  insertUrl,
  getAllUrls,
}