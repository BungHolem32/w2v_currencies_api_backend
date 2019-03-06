const express = require("express");
const router = express.Router();


/*
 *   Endpoint for  currencies controller.
 */
router.get("/currencies", async (req, res, next) => {
    let results = [
        {
            "name": "ILS",
            "conversion": 2.73
        },
        {
            "name": "USD",
            "conversion": 3.94
        },
        {
            "name": "EUR",
            "conversion": 1.34
        },
        {
            "name": "GBP",
            "conversion": 1.76
        },
        {
            "name": "CAD",
            "conversion": 3.13
        }
    ];

    res.jsonp(results);
});


module.exports = router;