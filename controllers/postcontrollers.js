
const Post = require('../models/postmodel');


exports.createPost = async (req, res) => {
    try {
       
        const {title, body} = req.body;
        const post = new Post({title, body});
        const savePost =  await post.save();
        res.json({
           
            post: savePost,
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.getAllPost = async (req, res) => {  
    try {
        const posts = await Post.find().populate('comments').populate('likes').exec();
        res.json({ posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}