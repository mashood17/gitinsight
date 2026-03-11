/* 
ANALYZE PROFILE (Landing Page)
 */

function analyzeProfile() {

const username =
document.getElementById("usernameInput")?.value ||
document.getElementById("username")?.value;

if (!username) {
alert("Enter a GitHub username");
return;
}

saveSearch(username);

window.location.href = "dashboard.html?username=" + username;

}


/* 
LOAD DASHBOARD
 */

async function loadDashboard() {

const params = new URLSearchParams(window.location.search);
const username = params.get("username");

if (!username) return;

saveSearch(username);

try {

const response = await fetch("http://127.0.0.1:5000/api/analyze/" + username);

if (!response.ok) {
showUserNotFound(username);
return;
}

const data = await response.json();

const loading = document.getElementById("loading");
if (loading) loading.style.display = "none";

displayProfile(data.profile);
displayStats(data.analysis);
displaySummary(data.ai_summary, data.strengths, data.roles);
displayLanguageChart(data.analysis.language_distribution);
displayRepos(data.top_repositories);
displayScore(data.analysis.activity_score);

} catch (error) {

console.error("API Error:", error);
document.getElementById("loading").innerHTML =
"Unable to fetch GitHub data. Please try another username.";

}

}


/* 
PROFILE
 */

function displayProfile(profile){

const profileDiv = document.getElementById("profile");

if(!profileDiv) return;

/* fix for null name */

const displayName = profile.name 
    ? profile.name 
    : profile.profile_url.split("/").pop();

profileDiv.innerHTML = `
<img src="${profile.avatar}">
<h2>${displayName}</h2>

<p><strong>Followers:</strong> ${profile.followers}</p>
<p><strong>Repositories:</strong> ${profile.public_repos}</p>

<a href="${profile.profile_url}" target="_blank">
View GitHub Profile
</a>
`;

}

/* 
STATS
 */

function displayStats(stats) {

const statsDiv = document.getElementById("stats");

if (!statsDiv) return;

statsDiv.innerHTML = `

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


/* 
AI SUMMARY
 */

function displaySummary(summary, strengths, roles){

const summaryDiv = document.getElementById("summary");

if(!summaryDiv) return;

summaryDiv.innerHTML = `

<div class="ai-summary-card">

<h3>Developer Insights</h3>

<p class="ai-text">
${summary}
</p>

<div class="insight-grid">

<div>
<h4>Key Strengths</h4>
<ul>
${strengths.map(s => `<li>${s}</li>`).join("")}
</ul>
</div>

<div>
<h4>Recommended Roles</h4>
<ul>
${roles.map(r => `<li>${r}</li>`).join("")}
</ul>
</div>

</div>

</div>

`;

}

/* 
LANGUAGE CHART
 */

let languageChart;

function displayLanguageChart(languageData){

const canvas = document.getElementById("languageChart");
if (!canvas) return;

const ctx = canvas.getContext("2d");

const labels = Object.keys(languageData);
const values = Object.values(languageData);

const total = values.reduce((a,b)=>a+b,0);

const percentages = values.map(v => ((v/total)*100).toFixed(1));

if (languageChart) {
languageChart.destroy();
}

languageChart = new Chart(ctx, {

type: "pie",

data: {
labels: labels.map((l,i)=> `${l} (${percentages[i]}%)`),

datasets: [{
data: values,

backgroundColor:[
"#1E5FAF",
"#1BA7A6",
"#F4A62A",
"#94A3B8",
"#6366F1"
]

}]
},

options:{
plugins:{
tooltip:{
callbacks:{
label:function(context){

let label = context.label || "";
let value = context.parsed;

let percent = ((value/total)*100).toFixed(1);

return `${label}: ${percent}%`;

}
}
}
}
}

});

}

/* 
TOP REPOSITORIES
 */

function displayRepos(repos){

const repoDiv = document.getElementById("repos");

if(!repoDiv) return;

repoDiv.innerHTML = repos.map(repo => `

<div class="repo-row">

<div class="repo-left">

<h4>${repo.name}</h4>

<span class="repo-lang">
${repo.language || "Unknown"}
</span>

</div>

<div class="repo-right">

<span class="repo-star">★ ${repo.stars}</span>

</div>

</div>

`).join("");

}

/* 
DEVELOPER SCORE
 */

function displayScore(score){

const bar = document.getElementById("score-bar");
const text = document.getElementById("score-text");

if (!bar || !text) return;

let percent = Math.min((score / 5000) * 100, 100);
percent = Math.round(percent);

bar.style.width = percent + "%";

text.innerHTML = `
<strong>${percent}/100</strong>
<span class="score-label">Developer Score</span>
`;

}


/* 
RECENT SEARCHES
 */

function saveSearch(username){

if(!username) return;

let searches = JSON.parse(localStorage.getItem("searches")) || [];

if(!searches.includes(username)){
searches.unshift(username);
}

searches = searches.slice(0,5);

localStorage.setItem("searches", JSON.stringify(searches));

displayRecentSearches();

}


function displayRecentSearches(){

const container =
document.getElementById("recent-searches") ||
document.getElementById("recentSearches");

if(!container) return;

let searches = JSON.parse(localStorage.getItem("searches")) || [];

container.innerHTML = searches.map(user => `
<div class="recent-item" onclick="goToUser('${user}')">
@${user}
</div>
`).join("");

}


function goToUser(username){

window.location.href = `dashboard.html?username=${username}`;

}


/*
SEARCH FROM DASHBOARD
*/

function searchUser(){

const username = document.getElementById("searchInput")?.value;

if(!username){
alert("Enter a GitHub username");
return;
}

window.location.href = `dashboard.html?username=${username}`;

}


/*
FOCUS SEARCH
 */

function focusSearch(){
document.getElementById("usernameInput")?.focus();
}


/* 
SCROLL TO SEARCH
 */

function scrollToSearch(){

document
.getElementById("searchSection")
?.scrollIntoView({behavior:"smooth"});

}


/*
WATCH DEMO MODAL
 */

document.addEventListener("DOMContentLoaded", function(){

displayRecentSearches();

const watchDemoBtn = document.getElementById("watchDemo");
const modal = document.getElementById("demoModal");

if(watchDemoBtn && modal){

watchDemoBtn.addEventListener("click", function(){
modal.style.display="flex";
});

}

});


function closeModal(){

document.getElementById("demoModal").style.display="none";

}


/* 
RUN DASHBOARD IF ON DASHBOARD PAGE
 */

if(window.location.pathname.includes("dashboard")){
loadDashboard();
}

function showUserNotFound(username){

const modal = document.createElement("div");

modal.className = "error-modal";

modal.innerHTML = `

<div class="error-modal-content">

<h2>User Not Found</h2>

<p>
The GitHub user <strong>${username}</strong> does not exist.
Please check the username and try again.
</p>

<button onclick="location.href='index.html'">
Try Another Username
</button>

</div>

`;

document.body.appendChild(modal);

}