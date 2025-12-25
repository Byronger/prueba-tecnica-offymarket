const express = require('express');
const { getPosts } = require('../controllers/posts.controller');

const router = express.Router();

router.get('/posts', getPosts);

module.exports = router;