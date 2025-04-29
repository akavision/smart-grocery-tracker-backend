const express = require('express');
const { addItem, getItems } = require('../controllers/itemController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addItem);
router.get('/', protect, getItems);

module.exports = router;
