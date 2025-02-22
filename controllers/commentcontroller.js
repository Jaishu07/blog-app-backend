// import models

const Post = require('../models/postmodel');
const Comment = require('../models/commentmodel');
// const mongoose = require('mongoose');
// const { response } = require("express");

// create a comment


exports.createComment = async (req, res) => {
    try {
        // fetch data from request body 
        const { post, user, body } = req.body;

        // create comment object
        const comment = new Comment({
            post, user, body
        })

        // save the new comment object into the db 
        const savedComment = await comment.save();

        // Find the Post By Id and the new comment to its comment array 
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } },
            { new: true })
            .populate("comments") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
   
}




// exports.createComment = async (req, res) => {
//     try {
//         // fache data from req body
//         const {post , user, body} = req.body;
//         // create a new object of Comment
//         const comment = new Comment({
//             post,
//             user,
//             body,
//         });

//         // save the comment
//         const newComment = await comment.save();
//         // find the post by id add the comment to the post
//         const upadatedPost = await Post.findByIdAndUpdate(post, 
//             {$push: {comments: newComment._id}},
//             {new: true})
//         .populate('comments')
//         .exec();
//         // send the updated post to the client
//         res.json({
//             post: upadatedPost,
//             message: 'Comment created successfully'
//         });

//     } catch (error) {
//         res.status(400).json({  error: error.message });
//     }
// }