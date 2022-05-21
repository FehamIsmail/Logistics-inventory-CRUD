const router = require('express').Router();
let Item = require('../models/item.model');

//Display all items
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err))

});

//Get item by ID
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err))
})

//Delete item by ID
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted successfully.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//Update item by ID
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            weight: req.body.weight,
            status: req.body.status,
        },
        { runValidators: true },
        (err) => {
            err ? res.send(err) : Item.findById(req.params.id).then(items => res.json(items))
    })
})

//Add item
router.post('/add', (req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const description = req.body.description || '';
    const status = req.body.status;
    const weight = req.body.weight;

    const newItem = new Item({name, description, quantity, weight, status})

    newItem.save()
        .then(() => res.json('Item added successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
})

//Exporting router
module.exports = router;