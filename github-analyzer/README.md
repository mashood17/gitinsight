# GitInsight 🚀

GitInsight is a **GitHub developer analytics dashboard** that analyzes public GitHub profiles and generates insights about developer activity, repositories, and technology usage.

The application collects GitHub repository data, processes developer metrics, and visualizes insights through an interactive analytics dashboard.

---

# Live Demo

Coming soon (deploy on Vercel)

---

# Features

• GitHub profile analytics
• Developer activity scoring system
• Repository statistics (stars, forks, languages)
• AI-generated developer insights
• Language distribution visualization using charts
• Top repositories ranked by popularity
• Developer score progress indicator
• Recent search history
• Interactive analytics dashboard UI

---

# Tech Stack

### Backend

* Python
* Flask
* GitHub REST API

### Frontend

* HTML
* CSS
* JavaScript
* Chart.js

---

# Project Architecture

User
↓
Frontend Dashboard
↓
Flask Backend API
↓
GitHub REST API
↓
Data Processing Engine
↓
Analytics Dashboard

---

# Dashboard Analytics

## Developer Profile

Displays:

• GitHub avatar
• Followers
• Repository count
• Profile link

---

## Repository Analytics

GitInsight analyzes repositories to calculate:

• Total stars
• Total forks
• Most used programming language
• Language distribution

---

## Developer Activity Score

GitInsight calculates a developer score using:

score = (repo_count × 2) + stars + (followers × 0.5)

Developers are classified into:

• Beginner Developer
• Intermediate Developer
• Advanced Developer

---

## AI Developer Summary

GitInsight generates a descriptive summary explaining:

• Developer expertise
• Activity level
• Technology focus
• Community engagement

---

## Top Repositories

Displays the developer's most popular repositories ranked by star count.

---

# Project Structure

```
github-analyzer
│
├── backend
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.py
│   └── requirements.txt
│
├── frontend
│   ├── index.html
│   ├── dashboard.html
│   ├── script.js
│   ├── style.css
│   └── hero-analytics.avif
│
├── .gitignore
└── README.md
```

---

# Running the Project Locally

### Clone Repository

```
git clone https://github.com/yourusername/gitinsight.git
cd gitinsight
```

---

### Start Backend

```
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

### Start Frontend

```
cd frontend
python -m http.server 5500
```

Frontend runs at:

```
http://127.0.0.1:5500
```

---

# Future Improvements

• Dark mode dashboard
• GitHub contribution heatmap analysis
• Organization repository insights
• Developer skill ranking
• Export analytics reports
• Docker deployment
• CI/CD integration

---

# Author

Mashood17
Full-Stack Developer

Passionate about building developer tools and analytics platforms.
