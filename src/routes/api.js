const express = require("express");
const router = express.Router();

/*
 *   Endpoint for  currencies.
 */
router.get("/currencies", async (req, res, next) => {
    res.json('hello world');
});


module.exports = router;