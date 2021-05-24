const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllProduct);

router.post('/', taskController.postNewProducts);

router.put('/:id', taskController.updateProduct);

router.delete('/:id', taskController.deleteProduct);

module.exports = router;