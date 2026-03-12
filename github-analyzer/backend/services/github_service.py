import requests
import os

GITHUB_API = "https://api.github.com/users"

HEADERS = {
    "User-Agent": "GitInsight-App",
    "Authorization": f"token {os.getenv('GITHUB_TOKEN')}"
}

def get_user_profile(username):

    url = f"{GITHUB_API}/{username}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        return None

    return response.json()


def get_user_repositories(username):

    url = f"{GITHUB_API}/{username}/repos"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        return []

    return response.json()