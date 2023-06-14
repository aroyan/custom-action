const core = require('@actions/core')
const github = require('@actions/github')

async function main(){

    const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN")
    const oktokit = github.getOctokit(GITHUB_TOKEN)

    const {context} = require('@actions/github')

    console.log(JSON.stringify(context.payload, null, "     " ))
    console.log(JSON.stringify(context, null, "     " ))

    console.log("Hello GitHub Actions, from JavaScript")
    
}

main()