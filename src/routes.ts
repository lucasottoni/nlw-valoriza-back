import { Router } from "express";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/tags/CreateTagController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { ListReceivedComplimentController } from "./controllers/ListReceivedComplimentController";
import { ListSentComplimentController } from "./controllers/ListSentComplimentController";
import { ensureAdmin } from "./middleware/AdminMiddleware";
import { ensureAuthenticated } from "./middleware/AuthMiddleware";
import { ListTagController } from "./controllers/tags/ListTagController";
import { ListUserController } from "./controllers/users/ListUserController";


const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

const authUserController = new AuthUserController();

const createComplimentController = new CreateComplimentController();
const listReceivedComplimentController = new ListReceivedComplimentController();
const listSentComplimentController = new ListSentComplimentController();

router.post("/auth", authUserController.handle);
router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listSentComplimentController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listReceivedComplimentController.handle);

export { router }