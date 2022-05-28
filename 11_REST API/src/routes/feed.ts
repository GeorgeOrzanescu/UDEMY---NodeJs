import { Router } from "express";
import { getPosts } from "../controllers/feed";
import { createPost } from "../controllers/feed";
const router = Router();

router.get("/posts", getPosts);
router.post("/post", createPost);

export default router;
