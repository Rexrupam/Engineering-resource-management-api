import mongoose, {Schema} from "mongoose"

export const projects = [
  {
    _id: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a1"),
    name: "Project Atlas",
    description: "Internal dashboard revamp",
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-31"),
    requiredSkills: ["React", "Node.js"],
    teamSize: 3,
    status: "active",
    managerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a5")
  },
  {
    _id:new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a2"),
    name: "Project Beacon",
    description: "Backend service for analytics",
    startDate: new Date("2025-07-15"),
    endDate: new Date("2025-09-15"),
    requiredSkills: ["Python", "Django"],
    teamSize: 2,
    status: "active",
    managerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a5")
  },
  {
    _id: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a3"),
    name: "Project Cypher",
    description: "AI Integration Pilot",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    requiredSkills: ["Python", "React"],
    teamSize: 4,
    status: "planning",
    managerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a5")
  },
  {
    _id: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a4"),
    name: "Project Delta",
    description: "Legacy migration",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-15"),
    requiredSkills: ["Node.js", "MongoDB"],
    teamSize: 2,
    status: "completed",
    managerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a5")
  }
];
