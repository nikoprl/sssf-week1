"use strict";
import express from "express";
import multer from 'multer';
import { cat_list_get, cat_get, cat_post } from "../controllers/catController";

const router = express.Router();
const upload = multer({ dest: './uploads/' });

router.get("/", cat_list_get);
router.get("/:id", cat_get);

router.post("/", upload.single('cat'), cat_post);

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit cats.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete cats.");
});

export default router;
