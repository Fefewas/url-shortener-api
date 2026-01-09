const Router = require("express");
const router = Router();

const {
  createShortUrl,
  redirectToOriginal,
  getAllUrls,
} = require("../controllers/shortener.controller");

router.post("/shorten", createShortUrl);
router.get("/:shortCode", redirectToOriginal);

module.exports = router;
