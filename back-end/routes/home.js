const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    await res.render('home');
});

module.exports = router;