import { Router } from "express"
import { getEngineers } from "../controller/engineer.controller.js"
import { verifyToken } from "../middleware.js/verifyToken.js"
import { getEngineerCapacity } from "../controller/engineer.controller.js"

const router=Router()

router.route('/').get(verifyToken,getEngineers)
router.route('/:id/capacity').get(verifyToken,getEngineerCapacity)
export default router