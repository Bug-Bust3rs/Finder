const express = require('express')
const {addPost ,getPost ,likePost } = require('../controllers/feedController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router()

router.get('/', getPost)
router.post('/:id', addPost)
router.post('/like/:id', authMiddleware, feedController.likePost);


module.exports = router;