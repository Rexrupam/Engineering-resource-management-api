
import { Router } from "express"
import { verifyToken } from "../middleware.js/verifyToken.js"
import { getProjects } from "../controller/project.controller.js"
import { createProject, getProjectById } from "../controller/project.controller.js"
const router = Router()

router.route("/").get(verifyToken, getProjects)
.post(verifyToken, createProject)
router.route("/:id").get(verifyToken, getProjectById)

export default router