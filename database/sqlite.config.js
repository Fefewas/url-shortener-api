"use strict";
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync(":memory:");

// Execute SQL statements from strings.
db.prepare(
  `
  CREATE TABLE urls(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    original_url TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  ) STRICT
`
).run();

module.exprots = db;
