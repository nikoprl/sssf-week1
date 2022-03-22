'use strict';
import { users, getUser } from '../models/userModel';

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const id = req.params.id;
  const user = getUser(id);
  res.json(user);
};

export {
  user_list_get, user_get
};
