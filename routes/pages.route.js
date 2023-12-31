import express from 'express';
import path from 'path';
import UserController from "../controllers/user.controller.js";
import errorHandler from "../controllers/error.controller.js";

const router = express.Router();

router.route("/").get(UserController.getAllUsers);

router.route('/css/index.css').get((req, res) => {
    res.sendFile(path.resolve() + "/css/index.css");
});

router.route("/css/style.css").get((req, res) => {
    res.sendFile(path.resolve() + "/css/style.css");
});

router.route("/login-page").get(UserController.getLoginPage);

router.route("/sign-up")
    .get(UserController.getSignUpPage)
    .post(UserController.postSignUp, errorHandler);

export default router;