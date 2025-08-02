import mongoose from "mongoose"
export const users = [
  {
    _id: new mongoose.Types.ObjectId('64f1b0c1c2b7a5a1a1a1a1a1'),
    email: "alice@company.com",     
    name: "Alice",
    role: "engineer",
    skills: ["React", "Node.js"],
    seniority: "mid",
    maxCapacity: 100,
    department: "Frontend"
  },
 {
    _id: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a2"),
    email: "bob@company.com",       
    name: "Bob",
    role: "engineer",
    skills: ["Python", "Django"],
    seniority: "senior",
    maxCapacity: 100,
    department: "Backend"
  },
  {
    _id: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a3"),
    email: "carol@company.com",  
    name: "Carol",
    role: "engineer",
    skills: ["React", "Python"],
    seniority: "junior",
    maxCapacity: 50,
    department: "Fullstack"
  },
  {
    _id: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a4"),
    email: "dave@company.com",      
    name: "Dave",
    role: "engineer",
    skills: ["Node.js", "MongoDB"],
    seniority: "mid",
    maxCapacity: 50,
    department: "Backend"
  },
  {
    _id: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a5"),
    email: "manager@company.com",  
    name: "Eve",
    role: "manager"
  }
];
