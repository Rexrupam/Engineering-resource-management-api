import mongoose, {Schema} from "mongoose";

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
})

export const User = mongoose.model('User',userSchema);