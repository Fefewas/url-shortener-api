const db = require("../database/sqlite.config");

const insertUrl = (url) => {
  try {
    const insert = db.prepare(
      "INSERT INTO shortenedUrls (key,value) VALUES (?, ?)"
    );
    insert.run(1, url);
  } catch (err) {
    console.error(err);
  }
};

const getAllUrl = () => {
  try {
    const query = Database.prepare("SELECT * FROM shortenedUrls ORDER BY key");
  } catch (err) {
    console.errror(err);
  }
};
