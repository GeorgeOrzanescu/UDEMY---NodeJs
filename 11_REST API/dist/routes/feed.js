"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_1 = require("../controllers/feed");
const feed_2 = require("../controllers/feed");
const router = (0, express_1.Router)();
router.get("/posts", feed_1.getPosts);
router.post("/post", feed_2.createPost);
exports.default = router;
