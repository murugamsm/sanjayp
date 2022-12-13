const express = require('express');
const router = express.Router();
const products = require('../services/product.service');

/* GET Products. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await products.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting products `, err.message);
        next(err);
    }
});

/* POST Product */

router.post('/create', async function (req, res, next) {
    try {
        res.json(await products.create(req.body));
    } catch (err) {
        console.error(`Error while adding a product`, err.message);
        next(err);
    }
});

module.exports = router;