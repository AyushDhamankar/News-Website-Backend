const express = require('express');
const { createUser, signinUser, getUserData, getBookMarkData, bookmarkNews, unbookmarkNews } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', createUser);

router.post('/signin', signinUser);

router.post('/getUserData', getUserData);

router.post('/getBookMarkData', getBookMarkData);

router.post('/bookmarkNews', bookmarkNews);

router.post('/unbookmarkNews', unbookmarkNews);

module.exports = router;