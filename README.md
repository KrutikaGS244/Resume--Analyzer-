# 🤖 AI-Powered Resume Analyzer and Job Matching Platform

An intelligent full-stack web application that analyzes resumes, generates an ATS-style score, identifies existing and missing skills, provides improvement suggestions, and helps users discover relevant job opportunities based on their skills.

## 🚀 Features

* 👤 User Registration and Login
* 🔐 JWT-based Authentication
* 📄 PDF Resume Upload
* 🤖 Automated Resume Analysis
* 📊 ATS-style Resume Score
* 🛠️ Skill Detection
* ❌ Missing Skill Identification
* 💡 Resume Improvement Suggestions
* 💼 Job Opportunity Listings
* 🎯 Resume-to-Job Skill Matching
* 📱 Responsive Web Interface
* 💾 MongoDB Database
* 🔌 RESTful APIs

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* REST API
* JWT Authentication
* Multer
* PDF Parser

### Database

* MongoDB
* Mongoose

### Development Tools

* Visual Studio Code
* Git
* GitHub
* MongoDB / MongoDB Atlas
* Postman

## 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │      React.js        │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │   Node.js + Express  │
                    │       Backend        │
                    └───────┬────────┬─────┘
                            │        │
                 ┌──────────┘        └──────────┐
                 ▼                              ▼
        ┌─────────────────┐             ┌────────────────┐
        │    MongoDB      │             │ Resume Analyzer│
        │    Database     │             │ Skill Matching │
        └─────────────────┘             └────────────────┘
```

## 📂 Project Structure

```text
AI-Resume-Analyzer/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Resume.js
│   │   └── Job.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── resumes.js
│   │   └── jobs.js
│   │
│   ├── utils/
│   │   └── analyzer.js
│   │
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── index.js
│   │   └── style.css
│   │
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Resume-Analyzer.git
```

```bash
cd AI-Resume-Analyzer
```

### 2. Backend Setup

Open the terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/resume_analyzer
JWT_SECRET=your_secret_key
PORT=5000
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

## 🗄️ MongoDB Setup

Make sure MongoDB is running locally.

The application uses:

```text
Database: resume_analyzer
```

Collections are created automatically:

```text
users
resumes
jobs
```

You can also use MongoDB Atlas by replacing the `MONGO_URI` in the `.env` file.

## 📊 How the Application Works

### Step 1 — Registration

The user creates an account using their name, email and password.

### Step 2 — Login

The user logs in and receives a JWT authentication token.

### Step 3 — Upload Resume

The user uploads their resume in PDF format.

### Step 4 — Resume Processing

The backend extracts text from the uploaded PDF.

### Step 5 — Resume Analysis

The system analyzes the extracted text and checks for relevant technical skills.

### Step 6 — ATS Score

An ATS-style score is generated based on detected skills.

### Step 7 — Missing Skills

The application identifies important skills that are not detected in the resume.

### Step 8 — Suggestions

The system provides suggestions for improving the resume.

### Step 9 — Job Matching

Available jobs are displayed with their required skills, allowing the user to compare them with their resume skills.

## 🔌 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Resume

| Method | Endpoint               | Description                  |
| ------ | ---------------------- | ---------------------------- |
| POST   | `/api/resumes/analyze` | Upload and analyze resume    |
| GET    | `/api/resumes/mine`    | Get user's previous analyses |

### Jobs

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/jobs`     | Get available jobs |
| POST   | `/api/jobs`     | Add a job          |
| DELETE | `/api/jobs/:id` | Delete a job       |

## 🧠 Resume Analysis

The current version uses a **keyword-based skill analysis approach**.

Example:

```text
Resume:
Java, Python, React, Node.js, MongoDB, SQL

Detected Skills:
✓ Java
✓ Python
✓ React
✓ Node.js
✓ MongoDB
✓ SQL

Missing Skills:
✗ Docker
✗ AWS
✗ TypeScript
```

This approach provides a simple foundation that can later be upgraded with advanced NLP or LLM-based analysis.

## 🔮 Future Enhancements

* 🧠 Advanced NLP-based resume analysis
* 🤖 LLM-powered resume feedback
* 📑 Job Description vs Resume comparison
* 🎯 Personalized job recommendations
* 📈 Resume improvement tracking
* 📊 Advanced analytics dashboard
* 📧 Job application tracking
* 🔔 Job alerts
* ☁️ Cloud deployment
* 👨‍💼 Admin dashboard
* 📄 Resume format recommendations
* 🏆 Resume section-wise scoring

## 🎯 Use Cases

* College students preparing for placements
* Freshers looking for internships
* Job seekers improving their resumes
* Career guidance platforms
* Placement training centers
* Recruitment platforms

## 🔒 Security

The application includes:

* JWT-based authentication
* Password hashing using bcrypt
* Protected resume APIs
* File type validation
* File size limitation

## 👩‍💻 Author

**Krutika G S**

B.E. — Information Science and Engineering

Interested in Full-Stack Development, Java, AI and Machine Learning.

## ⭐ Project Highlights

```text
React.js
     ↓
Node.js
     ↓
Express.js
     ↓
REST API
     ↓
MongoDB
     ↓
Resume Processing
     ↓
Skill Analysis
     ↓
ATS Score + Job Matching
```

## 📜 License

This project is developed for educational and portfolio purposes.
