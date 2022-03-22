"use strict";
import express from "express";
import { cat_list_get, cat_get } from "../controllers/catController";

const router = express.Router();

router.get("/", cat_list_get);
router.get("/:id", cat_get);

export default router;
