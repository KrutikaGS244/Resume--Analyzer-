# AI-Powered Resume Analyzer and Job Matching Platform

A beginner-friendly full-stack project using React, Node.js, Express, MongoDB, and a simple keyword-based ATS analyzer.

## Features
- Register/Login with JWT
- Upload a PDF resume
- Extract PDF text
- Calculate an ATS-style score
- Detect skills from the resume
- Show missing skills
- Add/search jobs
- Match resume skills against job skills
- Simple dashboard

## Project structure
- `frontend` - React application
- `backend` - Express REST API

## Setup

### Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Edit `.env`:
```env
MONGO_URI=mongodb://127.0.0.1:27017/resume_analyzer
JWT_SECRET=change_this_secret
PORT=5000
```

### Frontend
Open another terminal:
```bash
cd frontend
npm install
npm start
```

Frontend runs on http://localhost:3000 and backend on http://localhost:5000.

### Important
MongoDB must be running locally. For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

This starter project uses keyword matching for the ATS score. It is intentionally simple and can later be upgraded with Python NLP/LLM analysis.
