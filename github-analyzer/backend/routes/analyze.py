from flask import Blueprint, jsonify
from services.github_service import get_user_profile, get_user_repositories
from utils.analysis_engine import analyze_repositories
from services.ai_service import generate_summary

analyze_bp = Blueprint("analyze", __name__)


@analyze_bp.route("/api/analyze/<username>", methods=["GET"])
def analyze_user(username):

    profile = get_user_profile(username)

    if not profile:
        return jsonify({"error": "User not found"}), 404

    repos = get_user_repositories(username)

    # get top 5 repositories by stars
    top_repos = sorted(
        repos, key=lambda x: x["stargazers_count"], reverse=True
    )[:5]

    analysis = analyze_repositories(repos, profile.get("followers"))
    summary = generate_summary(profile, analysis)

    return jsonify({
        "profile": {
            "name": profile.get("name"),
            "followers": profile.get("followers"),
            "following": profile.get("following"),
            "public_repos": profile.get("public_repos"),
            "avatar": profile.get("avatar_url"),
            "profile_url": profile.get("html_url")
        },

        "analysis": analysis,

        "ai_summary": summary,

        "top_repositories": [
            {
                "name": repo["name"],
                "stars": repo["stargazers_count"],
                "language": repo["language"]
            }
            for repo in top_repos
        ]
    })