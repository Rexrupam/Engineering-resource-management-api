import {User} from "../model/user.model.js"
import {Assignment} from "../model/assignment.model.js"

const getEngineer = async(engineerId)=>{
    return await User.findById(engineerId).select("-refreshToken -__v -createdAt -updatedAt");
}

const getActiveAssignments = async(engineerId)=>{
    const activeAssignments = await Assignment.find({ engineerId: engineerId });
    return activeAssignments;
}


export const getEngineers = async(req,res)=>{
    try {
        const user = req.user;
        if(!user || user.role !== 'manager'){
            return res.status(403).send("Access denied. Only managers can access this route.");
        }
    
        const engineers = await User.find({ role: 'engineer' }).select("-refreshToken -__v -createdAt -updatedAt");
        return res.status(200).json({ message: "Engineers fetched successfully", engineers });
    } catch (error) {
        console.error("Error fetching engineers:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
}

export const getEngineerCapacity = async(req,res)=>{
    try {
        const user = req.user;
        if(!user || user.role !== 'manager'){
            return res.status(403).send("Access denied. Only managers can access this route.");
        }
        const engineerId = req.params.id;
        console.log(engineerId)
        if(!engineerId){
            return res.status(400).send("Engineer ID is required");
        }
    
        const engineer = await getEngineer(engineerId);
        
        if(!engineer){
            return res.status(404).send("Engineer not found");
        }
         
        const activeAssignments = await getActiveAssignments(engineerId);
        console.log(activeAssignments)
        const totalAllocated = activeAssignments.reduce((acc, assignment) => acc + assignment.allocationPercentage, 0);
        console.log(totalAllocated)                                                                                                       
        const totalCapacity = engineer.maxCapacity - totalAllocated;
      
        return res.status(200).json({
            message: "Engineer capacity fetched successfully",
            engineer: {
                availableCapacity: totalCapacity
            }
        });
    } catch (error) {
        console.error("Error fetching engineer capacity:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
}