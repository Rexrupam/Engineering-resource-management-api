import mongoose from "mongoose"

export const user1Id = new mongoose.Types.ObjectId
export const user2Id = new mongoose.Types.ObjectId
export const user3Id = new mongoose.Types.ObjectId
export const user4Id = new mongoose.Types.ObjectId
export const user5Id = new mongoose.Types.ObjectId
 

export const users = [
  {
    _id: user1Id,
    email: "alice@company.com",     
    name: "Alice",
    role: "engineer",
    skills: ["React", "Node.js"],
    seniority: "mid",
    maxCapacity: 100,
    department: "Frontend"
  },
 {
    _id: user2Id,
    email: "bob@company.com",       
    name: "Bob",
    role: "engineer",
    skills: ["Python", "Django"],
    seniority: "senior",
    maxCapacity: 100,
    department: "Backend"
  },
  {
    _id: user3Id,
    email: "carol@company.com",  
    name: "Carol",
    role: "engineer",
    skills: ["React", "Python"],
    seniority: "junior",
    maxCapacity: 50,
    department: "Fullstack"
  },
  {
    _id: user4Id,
    email: "dave@company.com",      
    name: "Dave",
    role: "engineer",
    skills: ["Node.js", "MongoDB"],
    seniority: "mid",
    maxCapacity: 50,
    department: "Backend"
  },
  {
    _id: user5Id,
    email: "manager@company.com",  
    name: "Eve",
    role: "manager"
  }
];
