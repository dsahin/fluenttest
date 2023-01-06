const { Octokit } = require("@octokit/action");

async function getIssues() {
    const octokit = new Octokit();
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

    // See https://developer.github.com/v3/issues/#create-an-issue
    const issues = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner,
        repo
    });

    const fs = require('fs');
    let issuesData = JSON.stringify(issues);
    console.log(issuesData);

    fs.writeFileSync('outputs/issues.json', issuesData);
}

function start() {
    return getIssues();
}

// Call start
(async() => {
    await start();
})();