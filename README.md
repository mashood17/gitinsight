# GitInsight 🚀

GitInsight is a **GitHub developer analytics platform** that analyzes public GitHub profiles and generates insights about developer activity, repository statistics, and technology usage.

The application fetches GitHub data, processes repository metrics, and visualizes developer insights in an interactive dashboard.

---

# Live Demo 🌐

Frontend
https://gitinsight-lake.vercel.app

Backend API
https://gitinsight-2j2x.onrender.com

Example API Request

https://gitinsight-2j2x.onrender.com/api/analyze/torvalds

---

# Features

• GitHub profile analytics
• Repository statistics and developer insights
• Developer activity scoring system
• AI-generated developer summary
• Programming language distribution visualization
• Top repositories ranked by stars
• Developer score progress indicator
• Recent search history
• Interactive analytics dashboard

---

# Tech Stack

## Backend

* Python
* Flask
* GitHub REST API

## Frontend

* HTML
* CSS
* JavaScript
* Chart.js

## Deployment

* Backend: Render
* Frontend: Vercel

---

# System Architecture

User
↓
Frontend Dashboard (Vercel)
↓
Flask Backend API (Render)
↓
GitHub REST API
↓
Data Processing Engine
↓
Analytics Dashboard

---

# Dashboard Analytics

## Developer Profile

Displays GitHub profile information including:

• Avatar
• Followers
• Repository count
• GitHub profile link

---

## Repository Analytics

GitInsight analyzes repositories to calculate:

• Total stars
• Total forks
• Most used programming language
• Language distribution

---

## Developer Activity Score

GitInsight calculates a developer score using the formula:

score = (repo_count × 2) + stars + (followers × 0.5)

Developers are classified into:

• Beginner Developer
• Intermediate Developer
• Advanced Developer

---

## AI Developer Summary

The platform automatically generates a descriptive summary explaining:

• Developer expertise
• Technology focus
• Activity level
• Community engagement

---

## Top Repositories

Displays the developer’s most popular repositories ranked by star count.

---

# Project Structure

github-analyzer

backend
 services
 routes
 utils
 models
 app.py
 requirements.txt

frontend
 index.html
 dashboard.html
 style.css
 script.js

.gitignore
README.md

---

# Running the Project Locally

## Clone Repository

git clone https://github.com/mashood17/gitinsight.git

cd gitinsight/github-analyzer

---

## Start Backend

cd backend

pip install -r requirements.txt

python app.py

Backend runs at

http://127.0.0.1:5000

---

## Start Frontend

cd ../frontend

python -m http.server 5500

Frontend runs at

http://127.0.0.1:5500

---

# Example Dashboard Insights

The dashboard provides:

• Developer profile overview
• Repository analytics
• Programming language distribution chart
• Developer activity score
• Top repositories
• AI-generated developer summary

---

# Future Improvements

• Dark mode dashboard
• GitHub contribution heatmap analysis
• Organization repository analytics
• Export analytics reports
• Docker deployment
• CI/CD integration

---

# Author

Mahammad Mashood
Computer Science Student | Full-Stack Developer

Passionate about building developer tools and analytics platforms.
