import express from "express"
import HealthCheckRouter from "./router/healthCheck.route.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import authRouter from "./router/auth.router.js"
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.cors_origin,
    credentials: true
}))

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api', HealthCheckRouter)
app.use('/api', authRouter)
export { app }; 