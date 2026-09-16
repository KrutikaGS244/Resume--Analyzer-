require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");

const jobs = [
  {
    title: "Full Stack Developer Intern",
    company: "Tech Solutions",
    location: "Bengaluru",
    description: "Build web applications and REST APIs.",
    skills: ["react", "node.js", "express", "mongodb", "javascript", "git"]
  },
  {
    title: "Java Developer Intern",
    company: "Software Labs",
    location: "Hyderabad",
    description: "Develop backend applications and database solutions.",
    skills: ["java", "sql", "mysql", "git", "rest api"]
  },
  {
    title: "Data Analyst Intern",
    company: "Analytics Hub",
    location: "Pune",
    description: "Create dashboards and analyze business data.",
    skills: ["python", "sql", "power bi", "excel", "tableau"]
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Job.deleteMany({});
  await Job.insertMany(jobs);
  console.log("Sample jobs inserted");
  process.exit();
});
