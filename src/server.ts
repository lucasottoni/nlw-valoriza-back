import "reflect-metadata";
import express from "express";
import "express-async-errors";

import cors from "cors";

import "./database";

import { router } from "./routes";
import { errorMiddleware } from "./middleware/ErrorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router)

app.use(errorMiddleware.handle)

app.listen(3000, () => console.log("Server is running NLW"));