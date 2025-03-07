const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post: {
        type: String,
        ref: 'Post',
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Like', likeSchema); // ✅ Make sure you are exporting the model