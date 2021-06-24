import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "./database";

import { router } from "./routes";
import { errorMiddleware } from "./middleware/ErrorMiddleware";

const app = express();

app.use(express.json());

app.use(router)

app.use(errorMiddleware.handle)

app.listen(3000, () => console.log("Server is running NLW"));