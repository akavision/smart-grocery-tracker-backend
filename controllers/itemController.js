const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  const { name, expiryDate, quantity } = req.body;
  try {
    const item = await Item.create({
      name, expiryDate, quantity,
      userId: req.user.id
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id }).sort({ expiryDate: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
