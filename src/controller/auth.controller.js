import {User} from "../model/user.model.js"

const generateAccessAndRefreshTokens= async(userId)=>{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        user.save({validateBeforeSave: false})
        
        return {accessToken, refreshToken}
} 

export const login=async(req,res)=>{
    const { email, role } = req.body || {};
    
    if(!email || !role){
        return res.status(400).send("email and role required");
    }
    
    const user = await User.findOne({
        email,
        role
    })

    if(!user){
         return res.status(400).send("Not a registered user");
    }
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json({message: "User logged in successfully"})
}

export const getProfile=async(req,res)=>{
    const user = req.user

    const fetchUser = await User.findById(user._id).select("-refreshToken -__v")

    if(!fetchUser){
        return res.status(500).send("Unable to find user")
    }

    return res
    .status(200)
    .json({message: "User profile fetched successfully", user: fetchUser})

}