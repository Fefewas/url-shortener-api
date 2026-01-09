
'use strict';
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync(':memory:');

// Execute SQL statements from strings.
db.exec(`
  CREATE TABLE shortenedUrls(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);

module.exprots = db;
