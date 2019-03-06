const express = require("express");
const router = express.Router();
const CurrencyController = require('../controllers/currency-controller');


/*
 *   Endpoint for  currencies controller.
 */
router.get("/currencies", async (req, res, next) => {
    let results = await CurrencyController.getCurrencies(req.app.get('DB'));

    res.jsonp(results);
});

//Endpoint that return individual currency
router.get("/currencies/:name", async (req, res, next) => {
    let result = await CurrencyController.getCurrencyByName(req.app.get('DB'), req.params.name);

    res.jsonp(result);
});


module.exports = router;