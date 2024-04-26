import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const testReports = core.getMultilineInput('test-reports');
    const coverageReports = core.getMultilineInput('coverage-reports');

    testReports.forEach(testReport => {
      core.info(`Parsing file ${testReport}`);
    });

    coverageReports.forEach(coverageReport => {
      core.info(`Parsing file ${coverageReport}`);
    });
  } catch (error) {
    core.setFailed((error as Error).message);
  }
}

run();
