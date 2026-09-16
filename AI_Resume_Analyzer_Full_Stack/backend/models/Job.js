const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  description: String,
  skills: [String]
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
