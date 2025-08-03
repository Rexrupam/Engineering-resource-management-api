import {Project} from '../model/project.model.js'

export const getProjects = async (req, res) => {
       const user = req.user
       if(!user || user.role!=='manager'){
         return res.status(403).send("Access denied. Only managers can access this route") 
       }

        const projects = await Project.find().select("-__v -createdAt -updatedAt");
        if(!projects){

            return res.status(500).send("Failed to fetch projects")
        }

        return res.status(200).json({ message: "Projects fetched successfully", projects });
   
}

export const createProject = async (req,res) =>{
    const user = req.user
    if(!user || user.role!=='manager'){
        return res.status(403).send("Access denied. Only managers can create projects")
    }
    const {name, description, startDate, endDate, requiredSkills, teamSize, status} = req.body || {};
    // Validate the required fields
    if(!name || !description || !startDate || !endDate || !requiredSkills || !teamSize || !status){
        return res.status(400).send("All fields are required")
    }
    // Validate the teamSize field
    if(teamSize <= 0){
        return res.status(400).send("Team size must be greater than 0")
    }

    // Validate the status field
    if(!['planning', 'active', 'completed'].includes(status)){
        return res.status(400).send("Invalid status. Must be one of 'planning', 'active', or 'completed'")
    }
    // Check if a project with the same name already exists
    // If it does, return an error response
    const existingProject = await Project.findOne({ name });
    if(existingProject){
        return res.status(400).send("Project with this name already exists. Please choose a different name.");
    }

        const project = new Project({
            name,
            description,
            startDate,
            endDate,
            requiredSkills,
            teamSize,
            status,
            managerId: user._id
        });
         
        try {
            await project.save();
            return res.status(201).json({ message: "Project created successfully", project });
        } catch (error) {
            console.error("Error creating project:", error);
            return res.status(500).send("Failed to create project");
        }
}

export const getProjectById = async (req, res) => {
    const user = req.user
    if(!user || user.role!=='manager'){
        return res.status(403).send("Access denied. Only managers can access this route")
    }
    const projectId = req.params.id;
    if(!projectId){
        return res.status(400).send("Project ID is required");
    }

    const project = await Project.findById(projectId).select("-__v -createdAt -updatedAt");
    if(!project){
        return res.status(404).send("Project not found");
    }

    return res.status(200).json({ message: "Project fetched successfully", project });
}