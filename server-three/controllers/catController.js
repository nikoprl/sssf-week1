"use strict";
import { cats, getCat } from "../models/catModel";

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const id = req.params.id;
  const cat = getCat(id);
  res.json(cat);
};

const cat_post = (req, res) => {
  console.log("cat body: ", req.body);
  console.log("cat file: ", req.file);
  res.send("Cat sent.");
};

export { cat_list_get, cat_get, cat_post };
