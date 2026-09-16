const router = require("express").Router();
const multer = require("multer");
const pdfParse = require("pdf-parse");
const Resume = require("../models/Resume");
const auth = require("../middleware/auth");
const { analyzeResume } = require("../utils/analyzer");

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

router.post("/analyze", auth, upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Please upload a PDF resume" });
    if (req.file.mimetype !== "application/pdf")
      return res.status(400).json({ message: "Only PDF files are supported" });

    const data = await pdfParse(req.file.buffer);
    const result = analyzeResume(data.text);

    const resume = await Resume.create({
      user: req.userId,
      fileName: req.file.originalname,
      text: data.text,
      ...result
    });

    res.status(201).json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/mine", auth, async (req, res) => {
  const resumes = await Resume.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(resumes);
});

module.exports = router;
