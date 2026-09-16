const SKILLS = [
  "javascript", "react", "node.js", "node", "express", "mongodb",
  "mysql", "java", "python", "c", "html", "css", "typescript",
  "git", "github", "docker", "aws", "sql", "rest api", "machine learning",
  "artificial intelligence", "power bi", "tableau", "figma"
];

function analyzeResume(text) {
  const lower = text.toLowerCase();

  const found = SKILLS.filter(skill => {
    const aliases = skill === "node" ? ["node", "node.js"] : [skill];
    return aliases.some(a => lower.includes(a));
  });

  const required = ["javascript", "react", "node.js", "express", "mongodb", "git", "sql", "html", "css"];
  const missing = required.filter(skill => !found.includes(skill));

  const score = Math.min(100, Math.round((found.length / SKILLS.length) * 100 + 25));

  const suggestions = [];
  if (!lower.includes("github")) suggestions.push("Add a GitHub profile or project links.");
  if (!lower.includes("rest")) suggestions.push("Mention REST API development if applicable.");
  if (!lower.includes("achievement")) suggestions.push("Add measurable achievements to project descriptions.");
  if (!lower.includes("intern")) suggestions.push("Include internship or practical experience if available.");

  return { score, skills: found, missingSkills: missing, suggestions };
}

module.exports = { analyzeResume };
