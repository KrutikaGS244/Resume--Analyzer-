import React, { useEffect, useState } from "react";
import api, { setToken } from "./api";

function App() {
  const [page, setPage] = useState("home");
  const [token, setAuthToken] = useState(localStorage.getItem("token") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [result, setResult] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setToken(token);
    loadJobs();
  }, [token]);

  async function loadJobs() {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch {}
  }

  async function login(e) {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      setAuthToken(res.data.token);
      setName(res.data.name);
      setPage("dashboard");
      setMessage("Login successful");
    } catch (err) { setMessage(err.response?.data?.message || "Login failed"); }
  }

  async function register(e) {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      await api.post("/auth/register", data);
      setMessage("Registration successful. Please login.");
      setPage("login");
    } catch (err) { setMessage(err.response?.data?.message || "Registration failed"); }
  }

  async function analyze(e) {
    e.preventDefault();
    if (!token) return setPage("login");
    const form = new FormData();
    form.append("resume", e.target.resume.files[0]);

    try {
      const res = await api.post("/resumes/analyze", form, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setResult(res.data);
      setPage("result");
    } catch (err) { setMessage(err.response?.data?.message || "Analysis failed"); }
  }

  function logout() {
    localStorage.clear();
    setAuthToken("");
    setName("");
    setPage("home");
  }

  return (
    <div>
      <nav>
        <h2>ResumeAI</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("jobs")}>Jobs</button>
          {token ? <><button onClick={() => setPage("dashboard")}>Dashboard</button><button onClick={logout}>Logout</button></>
            : <><button onClick={() => setPage("login")}>Login</button><button onClick={() => setPage("register")}>Register</button></>}
        </div>
      </nav>

      {message && <div className="message">{message}</div>}

      {page === "home" && (
        <main className="hero">
          <h1>AI-Powered Resume Analyzer</h1>
          <p>Upload your resume, discover skills, find missing skills and explore matching jobs.</p>
          <form onSubmit={analyze} className="card upload">
            <input name="resume" type="file" accept=".pdf" required />
            <button className="primary">Analyze Resume</button>
          </form>
        </main>
      )}

      {page === "login" && <AuthForm title="Login" onSubmit={login} login />}
      {page === "register" && <AuthForm title="Create Account" onSubmit={register} />}

      {page === "result" && result && (
        <main className="container">
          <h1>Resume Analysis</h1>
          <div className="score">{result.score}%</div>
          <h3>Detected Skills</h3>
          <div className="chips">{result.skills.map(s => <span key={s}>{s}</span>)}</div>
          <h3>Missing Skills</h3>
          <div className="chips">{result.missingSkills.map(s => <span key={s}>{s}</span>)}</div>
          <h3>Suggestions</h3>
          <ul>{result.suggestions.map(s => <li key={s}>{s}</li>)}</ul>
        </main>
      )}

      {page === "dashboard" && (
        <main className="container">
          <h1>Welcome, {name}</h1>
          <p>Use the home page to upload and analyze your resume.</p>
          <button className="primary" onClick={() => setPage("home")}>Analyze Resume</button>
        </main>
      )}

      {page === "jobs" && <Jobs jobs={jobs} />}
    </div>
  );
}

function AuthForm({ title, onSubmit, login }) {
  return (
    <main className="auth card">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        {!login && <input name="name" placeholder="Full name" required />}
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" minLength="6" required />
        <button className="primary">{title}</button>
      </form>
    </main>
  );
}

function Jobs({ jobs }) {
  const token = localStorage.getItem("token");
  const resumeSkills = JSON.parse(localStorage.getItem("resumeSkills") || "[]");

  return (
    <main className="container">
      <h1>Job Opportunities</h1>
      {jobs.length === 0 && <p>No jobs available.</p>}
      <div className="job-grid">
        {jobs.map(job => {
          const overlap = job.skills?.filter(s => resumeSkills.includes(s)).length || 0;
          return (
            <div className="card" key={job._id}>
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <div className="chips">{job.skills?.map(s => <span key={s}>{s}</span>)}</div>
              {token && <p><b>Skill match:</b> {overlap}/{job.skills?.length || 0}</p>}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
