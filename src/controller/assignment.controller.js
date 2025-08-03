import { Assignment } from "../model/assignment.model.js"

export const getAssingments = async (req, res) => {
    try {
        const user = req.user;
        if (!user || user.role !== 'manager') {
            return res.status(403).send("Access denied. Only managers can access this route.");
        }
        const assignments = await Assignment.find().select('-refreshToken -__v -createdAt -updatedAt');
        return res.status(200).json({ message: "Assignments fetched successfully", assignments });
    } catch (error) {
        console.error("Error fetching assignments:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}