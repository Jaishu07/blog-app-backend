const Post = require('../models/postmodel');
const Like = require('../models/likemodel');


exports.likePost = async (req, res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({post, user});
        const saveLike = await like.save();

        const updatelike = await Post.findByIdAndUpdate(post, {
            $push: {
                likes: saveLike._id,
            },} , {new: true}
        ).populate('likes').exec();
        res.json({
            like: updatelike,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.unlikePost = async (req, res) => {
    try {
        const {post, like} = req.body;

        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        const updatelike = await Post.findByIdAndUpdate(post,
            { $pull: { likes: deletedLike._id } },
            { new: true } , {new: true}
        ).populate('likes').exec();
        res.json({
            like: updatelike,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}