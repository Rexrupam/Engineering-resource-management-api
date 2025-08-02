import mongoose from "mongoose"

export const assignments=[
    {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a1"), // Alice
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a1"), // Atlas
    allocationPercentage: 70,
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-31"),
    role: "Frontend Developer"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a2"), // Bob
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a2"), // Beacon
    allocationPercentage: 100,
    startDate: new Date("2025-07-15"),
    endDate: new Date("2025-09-15"),
    role: "Tech Lead"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a3"), // Carol
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a2"), // Beacon
    allocationPercentage: 50,
    startDate: new Date("2025-07-20"),
    endDate: new Date("2025-09-10"),
    role: "Junior Dev"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a4"), // Dave
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a1"), // Atlas
    allocationPercentage: 50,
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-09-15"),
    role: "Backend Dev"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a1"), // Alice
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a3"), // Cypher
    allocationPercentage: 30,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "AI Frontend Dev"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a4"), // Dave
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a4"), // Delta
    allocationPercentage: 50,
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-15"),
    role: "Legacy Specialist"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a2"), // Bob
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a3"), // Cypher
    allocationPercentage: 40,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "Data Scientist"
  },
  {
    engineerId: new mongoose.Types.ObjectId("64f1b0c1c2b7a5a1a1a1a1a3"), // Carol
    projectId: new mongoose.Types.ObjectId("75a1b0c1c2b7a5a1a1a1a1a3"), // Cypher
    allocationPercentage: 50,
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    role: "AI Assistant"
  }
]