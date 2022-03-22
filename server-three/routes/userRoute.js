"use strict";
import express from "express";
import { user_list_get, user_get } from "../controllers/userController";

const router = express.Router();

router.get("/", user_list_get);
router.get("/:id", user_get);

router.post("/", (req, res) => {
  res.send("From this endpoint you can add users.");
});

router.put("/", (req, res) => {
  res.send("From this endpoint you can edit users.");
});

router.delete("/", (req, res) => {
  res.send("From this endpoint you can delete users.");
});

export default router;
