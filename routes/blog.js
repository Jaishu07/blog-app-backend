const express = require('express');
const router = express.Router();

// Import controllers
const {likePost , unlikePost} = require('../controllers/linkecontroller');
const {createComment} = require('../controllers/commentcontroller');
const {createPost ,getAllPost} = require('../controllers/postcontrollers');


// const {dummyRoute2} = require('../controllers/postcontrollers');

// router.get('/dummy', dummyRoute2); 

router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getAllPost);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost);


module.exports = router; // ✅ Make sure you are exporting the router
