import { getAssingments } from "../controller/assignment.controller.js"
import { Router } from "express"
import { verifyToken } from "../middleware.js/verifyToken.js"

const router = Router()

router.route("/").get(verifyToken, getAssingments)

export default router