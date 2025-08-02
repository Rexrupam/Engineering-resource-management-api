import { app } from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {User} from "./model/user.model.js"
import {users} from "./seed/user.seed.js"
import {Project} from "./model/project.model.js"
import {projects} from "./seed/project.seed.js"
import { Assignment } from "./model/assignment.model.js"
import { assignments } from "./seed/assignment.seed.js"
dotenv.config({
    path: './.env'
})


connectDB()
.then(async()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`Server is listening on port: ${process.env.port}`)
    })
    await Assignment.deleteMany({})
    await Project.deleteMany({})
    await User.deleteMany({})
    await User.insertMany(users)
    await Project.insertMany(projects)
    await Assignment.insertMany(assignments)
})
.catch((err)=>{
    console.log('MongoDB connection failed: ',err)
})