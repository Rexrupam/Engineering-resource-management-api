import { Router } from "express"
import { login, getProfile } from "../controller/auth.controller.js"
import { verifyToken } from "../middleware.js/verifyToken.js"

const router=Router()

router.route('/login').post(login)
router.route('/profile').get(verifyToken,getProfile)

export default router