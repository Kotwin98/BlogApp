// const router = require('express').Router();
// let Post = require('../models/post.model');

// router.route('/').get((req, res) => {
//     Post.find()
//         .then(posts => res.json(posts))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const title = req.body.title;
//     const author = req.body.author;
//     const content = req.body.content;

//     const newPost = new Post({
//         title,
//         author,
//         content,
//     });

//     newPost.save()
//         .then(() => res.json('Post added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/posts/:id').get((req, res) => {
//     Post.findById(req.params.id)
//         .then(post => res.json(post))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// add posts
router.route('/posts').post(PostController.addPost);

// get single post
router.route('/posts/:id').get(PostController.getSinglePost);

module.exports = router;