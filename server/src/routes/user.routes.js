import { signup, loginUser, logout } from "../controllers/User.controller.js";
import { verifyJWT } from "../meddlewares/auth.meddleware.js";
import {Router} from "express"

const router = Router();

router.route('/signup').post( signup)
router.route('/login').post(loginUser)
// Logout user
router.route('/logout').post(verifyJWT, logout)

export default router;