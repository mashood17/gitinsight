import requests

GITHUB_API = "https://api.github.com/users"


def get_user_profile(username):
    url = f"{GITHUB_API}/{username}"
    response = requests.get(url)

    if response.status_code != 200:
        return None

    return response.json()


def get_user_repositories(username):
    url = f"{GITHUB_API}/{username}/repos"
    response = requests.get(url)

    if response.status_code != 200:
        return None

    return response.json()