import express from "express";

import { getMessages, createMessage } from "../controllers/message.js";

const router = express.Router();

router.get("/messages", getMessages);

router.post("/messages/create", createMessage);

export default router;
