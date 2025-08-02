import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
     email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
     },
     name:{
          type: String,
          required: true
     },
     role:{
         type: String,
         enum: ['engineer', 'manager'],
         required: true
     },
    skills: {
         type: [String],
         default: undefined
     },
    seniority: {
       type: String,
       enum: ['junior', 'mid', 'senior'],
       default: undefined
  },
  maxCapacity: {
      type: Number,
      min: 0,
      max: 100,
      default: undefined
  },
  department: {
      type: String,
      default: undefined
  },
  refreshToken: {
     type: String,
     default: undefined
  }
}, 
{
     timestamps: true
}
)

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role
    },
    process.env.access_token_secret,
    {
        expiresIn: process.env.access_token_expiry
    }
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.refresh_token_secret,
        {
            expiresIn: process.env.refresh_token_expiry
        }
    )
}



export const User = mongoose.model('User',userSchema);