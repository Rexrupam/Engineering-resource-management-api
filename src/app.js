import express from "express"
import HealthCheckRouter from "./router/healthCheck.route.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import authRouter from "./router/auth.route.js"
import  engineerRouter from "./router/engineer.route.js"
import projectRouter from "./router/project.route.js"
import assignmentRouter from "./router/assignment.route.js"
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api', HealthCheckRouter)
app.use('/api/auth', authRouter)
app.use('/api/engineers', engineerRouter)
app.use('/api/projects', projectRouter)
app.use('/api/assignments', assignmentRouter)
export { app };