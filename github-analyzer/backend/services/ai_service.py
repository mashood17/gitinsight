def generate_summary(profile, analysis):

    name = profile.get("name") or "This developer"
    followers = profile.get("followers")
    repos = analysis.get("repo_count")
    stars = analysis.get("total_stars")
    language = analysis.get("top_language")
    level = analysis.get("developer_level")

    summary = f"{name} is classified as an {level.lower()} with {repos} public repositories."

    if language:
        summary += f" The developer primarily works with {language}."

    if stars > 1000:
        summary += " Their projects have received significant community attention through high star counts."

    if followers > 100:
        summary += " The profile also has a strong follower base, indicating recognition in the developer community."

    summary += " Overall, the developer shows active engagement in open-source development."

    return summary