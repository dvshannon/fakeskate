const express = require('express');
const router = express.Router();
const Skater = require('../model/skater')

// GET all
router.get('/', (req, res) => {
    res.send('hello world');
})
// GET one
router.get('/:id', (req, res) => {

})
// CREATE one
router.post('/', (req, res) => {

})
// PUT one
router.patch('/:id', (req, res) => {

})
// DELETE one
router.delete('/:id', (req, res) => {

})
module.exports= router;