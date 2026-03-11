function analyzeProfile() {

    const username = document.getElementById("username").value;

    if (!username) {
        alert("Enter a GitHub username");
        return;
    }

    window.location.href = "dashboard.html?username=" + username;
}


async function loadDashboard() {

    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");

    saveSearch(username);

    if (!username) return;

    const response = await fetch("http://127.0.0.1:5000/api/analyze/" + username);
    const data = await response.json();

    document.getElementById("loading").style.display = "none";

   displayProfile(data.profile);
displayStats(data.analysis);
displaySummary(data.ai_summary);
displayLanguageChart(data.analysis.language_distribution);
displayRepos(data.top_repositories);
displayScore(data.analysis.activity_score);
}


function displayProfile(profile) {

    document.getElementById("profile").innerHTML = `
        <img src="${profile.avatar}">
        <h2>${profile.name}</h2>
        <p><strong>Followers:</strong> ${profile.followers}</p>
        <p><strong>Repositories:</strong> ${profile.public_repos}</p>
        <a href="${profile.profile_url}" target="_blank">Visit GitHub</a>
    `;
}


function displayStats(stats) {

document.getElementById("stats").innerHTML = `

<div class="stat-card">
<h3>Total Stars</h3>
<p>${stats.total_stars}</p>
</div>

<div class="stat-card">
<h3>Total Forks</h3>
<p>${stats.total_forks}</p>
</div>

<div class="stat-card">
<h3>Top Language</h3>
<p>${stats.top_language}</p>
</div>

<div class="stat-card">
<h3>Developer Level</h3>
<p>${stats.developer_level}</p>
</div>

<div class="stat-card">
<h3>Activity Score</h3>
<p>${stats.activity_score}</p>
</div>

`;
}


function displaySummary(summary) {

    document.getElementById("summary").innerHTML = `<p>${summary}</p>`;
}


loadDashboard();

function displayLanguageChart(languageData) {

    const labels = Object.keys(languageData);
    const values = Object.values(languageData);

    const ctx = document.getElementById("languageChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: values
            }]
        }
    });
}

function displayRepos(repos){

const repoDiv = document.getElementById("repos");

repoDiv.innerHTML = repos.map(repo => `
<div class="repo-card">
<span>${repo.name}</span>
<span>⭐ ${repo.stars}</span>
<span>${repo.language || "N/A"}</span>
</div>
`).join("");

}

function displayScore(score){

let percent = Math.min(score / 5000 * 100, 100);

document.getElementById("score-bar").style.width = percent + "%";

document.getElementById("score-text").innerText =
"Score: " + score;

}       

function saveSearch(username){

let searches = JSON.parse(localStorage.getItem("searches")) || [];

if(!searches.includes(username)){
searches.unshift(username);
}

searches = searches.slice(0,5);

localStorage.setItem("searches", JSON.stringify(searches));

displayRecentSearches();
}


function displayRecentSearches(){

const container = document.getElementById("recent-searches");

let searches = JSON.parse(localStorage.getItem("searches")) || [];

container.innerHTML = searches.map(user => `
<span class="recent-item" onclick="goToUser('${user}')">${user}</span>
`).join("");

}


function goToUser(username){
window.location.href = `dashboard.html?username=${username}`;
}


displayRecentSearches();    

function searchUser(){

const username = document.getElementById("searchInput").value;

if(!username){
alert("Enter a GitHub username");
return;
}

window.location.href = `dashboard.html?username=${username}`;

}