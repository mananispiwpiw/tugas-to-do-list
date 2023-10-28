import { Router } from "express";

import {
    getSignup,
    getLogin,
    postSignup,
    postLogin,
} from "../controllers/userController.js";

const router = Router();

router.get("/signup", getSignup);
router.post("/signup", postSignup);
router.get("/login", getLogin);
router.post("/login", postLogin);

export { router };
