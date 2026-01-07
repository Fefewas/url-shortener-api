const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

const allowedOrigins = [];

app.use(
  cors({
    origin: allowedOrigins,
    methonds: "GET,POST,PATCH,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json);
app.use("/api");

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

module.exports = app;