"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
/*
    GET controller function that returns a response body with an array of posts
 */
const getPosts = (req, res, next) => {
    const resBody = [
        {
            title: "First post",
            content: "This is my first post!",
        },
    ];
    res.status(200).json({
        posts: resBody,
    });
};
exports.getPosts = getPosts;
/*
    POST controller function that returns a response body with a message and the post that was created
 */
const createPost = (req, res, next) => {
    const reqBody = req.body;
    res.status(201).json({
        message: "Post created successfully!",
        post: reqBody,
    });
};
exports.createPost = createPost;
