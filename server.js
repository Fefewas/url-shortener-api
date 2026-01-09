const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes/shortener.routes");

const allowedOrigins = ['http://localhost:3000'];

app.use(
  cors({
    origin: allowedOrigins,
    methonds: "GET,POST,PATCH,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

module.exports = app;
