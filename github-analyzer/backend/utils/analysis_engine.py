def analyze_repositories(repos, followers):

    total_stars = 0
    language_count = {}
    fork_count = 0

    for repo in repos:

        total_stars += repo.get("stargazers_count", 0)
        fork_count += repo.get("forks_count", 0)

        language = repo.get("language")

        if language:
            if language in language_count:
                language_count[language] += 1
            else:
                language_count[language] = 1

    # most used language
    top_language = None
    if language_count:
        top_language = max(language_count, key=language_count.get)

    repo_count = len(repos)

    # activity score formula
    score = (repo_count * 2) + total_stars + (followers * 0.5)

    # developer level classification
    if score < 50:
        level = "Beginner Developer"
    elif score < 200:
        level = "Intermediate Developer"
    else:
        level = "Advanced Developer"

    return {
        "total_stars": total_stars,
        "total_forks": fork_count,
        "repo_count": repo_count,
        "top_language": top_language,
        "language_distribution": language_count,
        "activity_score": round(score),
        "developer_level": level
    }