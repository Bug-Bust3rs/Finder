const express = require('express')
const { addSKill  } = require('../controllers/userController')
const { search } = require('../controllers/searchController')

const router = express.Router()

router.post('/:id/skills',addSKill);
router.get('/search',search);



module.exports = router