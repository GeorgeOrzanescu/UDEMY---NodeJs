import { RequestHandler } from "express";

type responseBody = [
  {
    title: string;
    content: string;
  }
];
/*
    GET controller function that returns a response body with an array of posts 
 */
export const getPosts: RequestHandler = (req, res, next) => {
  const resBody: responseBody = [
    {
      title: "First post",
      content: "This is my first post!",
    },
  ];
  res.status(200).json({
    posts: resBody,
  });
};

/*
    POST controller function that returns a response body with a message and the post that was created
 */

export const createPost: RequestHandler = (req, res, next) => {
  const reqBody: responseBody = req.body;
  res.status(201).json({
    message: "Post created successfully!",
    post: reqBody,
  });
};
