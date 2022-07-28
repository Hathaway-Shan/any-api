const { Router } = require('express');
const Card = require('../models/magicCards');

const router = Router();

router.get('/', async (req, res) => {
  const cards = await Card.getAll();
  const idName = cards.map((card) => ({ id: card.id, name: card.name }));
  res.json(idName);
});

module.exports = router;
