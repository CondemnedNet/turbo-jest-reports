import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/action';

async function run(): Promise<void> {
  try {
    if (core.getInput('token')) {
      const testReports = core.getMultilineInput('test-reports');
      const coverageReports = core.getMultilineInput('coverage-reports');

      testReports.forEach(testReport => {
        core.info(`Parsing file ${testReport}`);
      });

      coverageReports.forEach(coverageReport => {
        core.info(`Parsing file ${coverageReport}`);
      });

      core.summary.addRaw('Summary').write();

      const octokit = new Octokit();

      const pr = github.context.payload.pull_request;
      const sha = (pr && pr.head.sha) || github.context.sha;

      await octokit.checks.create({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        name: 'Jest Reports',
        head_sha: sha,
        status: 'completed',
        conclusion: 'success',
        output: {
          title: 'Hi',
          summary: 'Report summary',
          text: 'This is text',
        },
      });
    }
  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

run();
