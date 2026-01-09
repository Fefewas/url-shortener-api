const Database = require("better-sqlite3");

const db = new Database("urls.db");

console.log("DB FILE LOADED");
console.log("DB TYPE:", db.constructor.name);
console.log("DB PREPARE:", typeof db.prepare);

db.prepare(`
  CREATE TABLE IF NOT EXISTS urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    original_url TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`).run();

module.exports = db;
