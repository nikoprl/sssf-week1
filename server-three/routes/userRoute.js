"use strict";
import express from "express";
import { user_list_get, user_get } from "../controllers/userController";

const router = express.Router();

router.get("/", user_list_get);
router.get("/:id", user_get);

export default router;
