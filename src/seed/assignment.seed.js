import mongoose from "mongoose"
import { project1Id, project2Id, project3Id, project4Id } from "./project.seed.js"
import { user1Id, user2Id, user3Id, user4Id, user5Id } from "./user.seed.js"

export const assignments=[
    {
    engineerId: user1Id, // Alice
    projectId: project1Id, // Atlas
    allocationPercentage: 60,
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-31"),
    role: "Frontend Developer"
  },
  {
    engineerId: user2Id, // Bob
    projectId: project2Id, // Beacon
    allocationPercentage: 100,
    startDate: new Date("2025-07-15"),
    endDate: new Date("2025-09-15"),
    role: "Tech Lead"
  },
  {
    engineerId: user3Id, // Carol
    projectId: project2Id, // Beacon
    allocationPercentage: 50,
    startDate: new Date("2025-07-20"),
    endDate: new Date("2025-09-10"),
    role: "Junior Dev"
  },
  {
    engineerId: user4Id, // Dave
    projectId: project1Id, // Atlas
    allocationPercentage: 50,
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-09-15"),
    role: "Backend Dev"
  },
  {
    engineerId: user1Id, // Alice
    projectId: project3Id, // Cypher
    allocationPercentage: 30,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "AI Frontend Dev"
  },
  {
    engineerId: user4Id, // Dave
    projectId: project4Id, // Delta
    allocationPercentage: 50,
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-15"),
    role: "Legacy Specialist"
  },
  {
    engineerId: user2Id, // Bob
    projectId: project3Id, // Cypher
    allocationPercentage: 40,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "Data Scientist"
  },
  {
    engineerId: user3Id, // Carol
    projectId: project3Id, // Cypher
    allocationPercentage: 50,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "AI Assistant"
  }
]