import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema({
   name:{
      type: String,
      required: true
   },
   description:{
      type: String,
      required: true
   },
   startDate:{
      type: Date,
      required: true
   },
   endDate:{
      type: Date,
      required: true
   },
   requiredSkills:{
      type: [String],
      required: true
   },
   teamSize:{
    type: Number,
    required: true
   },
   status:{
    type: String,
    enum: ['planning','active','completed'],
    required: true
   },
   managerId:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, 
{
     timestamps: true
})

export const Project = mongoose.model('Project',projectSchema);