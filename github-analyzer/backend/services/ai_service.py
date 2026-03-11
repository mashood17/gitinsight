def generate_summary(profile, analysis):

    name = profile.get("name") or profile.get("login")
    repos = profile.get("public_repos")
    followers = profile.get("followers")

    level = analysis.get("developer_level")
    language = analysis.get("top_language")
    stars = analysis.get("total_stars")

    summary = f"""
{name} is classified as an {level.lower()} with {repos} public repositories on GitHub.

The developer primarily works with {language}, suggesting a strong focus on projects built within this technology ecosystem.

Across all repositories, the projects have accumulated approximately {stars} stars from the open-source community.

With {followers} followers on GitHub, the developer maintains visible engagement within the developer ecosystem.
"""

    strengths = [
        f"Strong experience with {language}",
        "Active open-source contributor",
        "Consistent repository activity"
    ]

    roles = [
        "Software Engineer",
        "Full-Stack Developer",
        "Open-Source Contributor"
    ]

    return {
        "summary": summary.strip(),
        "strengths": strengths,
        "roles": roles
    }