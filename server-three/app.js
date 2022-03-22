"use strict";
import express from "express";
import catRoute from "./routes/catRoute";
import userRoute from './routes/userRoute';
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/cat", catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
