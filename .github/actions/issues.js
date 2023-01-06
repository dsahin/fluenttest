const { Octokit } = require("@octokit/action");

async function getIssues() {
    const octokit = new Octokit();
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    // See https://developer.github.com/v3/issues/#create-an-issue
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner,
        repo
    });

    console.log(data);
}

function start() {
    return getIssues();
}

// Call start
(async() => {
    await start();
})();