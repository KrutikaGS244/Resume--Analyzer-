const router = require("express").Router();
const Job = require("../models/Job");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

router.post("/", auth, async (req, res) => {
  try {
    const { title, company, location, description, skills } = req.body;
    const job = await Job.create({ title, company, location, description, skills });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

module.exports = router;
