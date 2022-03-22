'use strict';
import { cats, getCat } from '../models/catModel';

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const id = req.params.id;
  const cat = getCat(id);
  res.json(cat);
};

export {
  cat_list_get, cat_get
};
