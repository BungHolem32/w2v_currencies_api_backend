const express = require("express");
const router = express.Router();

/**
 *  redirect form home page to api end-point
 */
router.get('/',function (eq, res, next) {
    res.redirect(process.env.BASE_URL + '/api/currencies');
});


module.exports = router;