# GitInsight 🚀

GitInsight is a GitHub profile analytics dashboard that analyzes developer activity and generates insights from public repositories.

The application fetches GitHub data, processes repository statistics, and visualizes developer metrics in a modern interactive dashboard.

---

## Features

* GitHub profile analysis
* Repository statistics and developer insights
* Developer activity scoring system
* AI-generated developer summary
* Language distribution visualization using charts
* Top repositories ranked by stars
* Developer score progress bar
* Recent search history
* Interactive analytics dashboard UI

---

## Tech Stack

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

## System Architecture

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

## Dashboard Features

### Developer Profile

Displays GitHub profile information including:

* Avatar
* Followers
* Repository count
* GitHub profile link

### Repository Analytics

Calculates key metrics from repositories:

* Total stars
* Total forks
* Most used programming language
* Language distribution

### Developer Activity Score

GitInsight calculates a developer score using the formula:

score = (repo_count × 2) + stars + (followers × 0.5)

Based on the score, developers are classified as:

* Beginner Developer
* Intermediate Developer
* Advanced Developer

### AI Developer Summary

Automatically generates a descriptive summary of the developer’s activity and strengths based on repository data and metrics.

### Top Repositories

Displays the top repositories sorted by star count along with their primary programming language.

---

## Running the Project

### 1. Clone the Repository

git clone https://github.com/yourusername/gitinsight.git

cd gitinsight

---

### 2. Start Backend

cd backend

pip install flask flask-cors requests

python app.py

Backend runs at:

http://127.0.0.1:5000

---

### 3. Start Frontend

cd frontend

python -m http.server 5500

Frontend runs at:

http://127.0.0.1:5500

---

## Example Dashboard

The dashboard provides:

* Developer profile overview
* Repository statistics
* Language distribution chart
* Developer activity score
* Top repositories
* AI-generated developer summary

---

## Future Improvements

* Dark mode dashboard
* GitHub contribution graph analysis
* Organization repository analytics
* Export developer analytics reports
* Deployment using Docker
* CI/CD integration

---

## Author

Computer Science Student | Full-Stack Developer

Passionate about building practical developer tools and analytics platforms.
