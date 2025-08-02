import mongoose, {Schema} from "mongoose"
import { user5Id } from "./user.seed.js";

export const project1Id = new mongoose.Types.ObjectId
export const project2Id = new mongoose.Types.ObjectId
export const project3Id = new mongoose.Types.ObjectId
export const project4Id = new mongoose.Types.ObjectId


export const projects = [
  {
    _id: project1Id,
    name: "Project Atlas",
    description: "Internal dashboard revamp",
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-31"),
    requiredSkills: ["React", "Node.js"],
    teamSize: 3,
    status: "active",
    managerId: user5Id
  },
  {
    _id: project2Id,
    name: "Project Beacon",
    description: "Backend service for analytics",
    startDate: new Date("2025-07-15"),
    endDate: new Date("2025-09-15"),
    requiredSkills: ["Python", "Django"],
    teamSize: 2,
    status: "active",
    managerId: user5Id
  },
  {
    _id: project3Id,
    name: "Project Cypher",
    description: "AI Integration Pilot",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    requiredSkills: ["Python", "React"],
    teamSize: 4,
    status: "planning",
    managerId: user5Id
  },
  {
    _id: project4Id,
    name: "Project Delta",
    description: "Legacy migration",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-15"),
    requiredSkills: ["Node.js", "MongoDB"],
    teamSize: 2,
    status: "completed",
    managerId: user5Id
  }
];
