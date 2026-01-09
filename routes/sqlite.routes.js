const Router = require('express')
const router = Router()

const {
    insertUrl,
    getAllUrls,
} = require('../controllers/sqlite.controller')

router.post("/insert-url", insertUrl);
router.get("/get-all-urls", getAllUrls)

module.exports = router;