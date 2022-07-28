const { Router } = require('express');
const { cats } = require('../../data/cats');

const router = Router();

router
    .get('/:id', (req, res) => {
        // console.log('id param:', req.params.id);
        const id = cats.find((cat) => cat.id === req.params.id);
        res.json(id);
    })
    .get('/', (req, res) => {
        // console.log(cats);
        const cat = cats.map((cat) => ({ id: cat.id, name: cat.name }));
        res.json(cat);
    });

module.exports = router;


