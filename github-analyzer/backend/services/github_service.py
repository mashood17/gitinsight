import requests

GITHUB_API = "https://api.github.com/users"

HEADERS = {
    "User-Agent": "GitInsight-App",
    "Accept": "application/vnd.github+json"
}


def get_user_profile(username):
    url = f"{GITHUB_API}/{username}"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        print("GitHub API profile error:", response.status_code, response.text)
        return None

    return response.json()


def get_user_repositories(username):
    url = f"{GITHUB_API}/{username}/repos"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        print("GitHub API repo error:", response.status_code, response.text)
        return []

    return response.json()