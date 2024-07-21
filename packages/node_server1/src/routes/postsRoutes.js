const express = require('express')
const {addPost ,getPost } = require('../controllers/feedController')

const router = express.Router()

router.get('/', getPost)
router.post('/:id', addPost)

module.exports = router