import jwt from "jsonwebtoken"
import {User} from "../model/user.model.js"
export const verifyToken = async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log(token)
        if(!token){
            return res.status(401).send("Unauthorised access");
        }
    
        const decodedToken = jwt.verify(token, process.env.access_token_secret)
        console.log(decodedToken)
        const user = await User.findById(decodedToken?._id).select("-refreshToken")
        console.log(user)
        if(!user){
            return res.status(401).send("Invalid access token")
        }
        
        req.user = user
        console.log(req.user)
        next();
    } catch (error) {
         return res.status(401).send(error.message)
    }
}
