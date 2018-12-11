const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const axios = require('axios');

const { GITHUB_TOKEN } = require('../config');

const versionTag = '5.1.0';
const url =
  'https://api.github.com/repos/SmolinPavel/play-with-react-hooks/releases/14436156';

const prepareSnippet = () => {
  let snippet = versionTag;

  const data = fs.readFileSync(
    path.resolve(__dirname, '../CHANGELOG.md'),
    'utf8'
  );

  const startIndex = data.indexOf(`## ${versionTag}`);

  if (startIndex !== -1) {
    console.log(`${chalk.green('✓')} Get changelog for ${versionTag} version`);
    const restOfTheFile = data.substring(startIndex);
    const previousReleaseIndex = restOfTheFile.indexOf('\n## ', 2);
    snippet = restOfTheFile.slice(0, previousReleaseIndex);
  } else {
    console.log(
      `${chalk.red(
        'x'
      )} Couldn't find ${versionTag} version changelog data ${chalk.blue(':(')}`
    );
  }

  return snippet;
};

const createGithubRelease = async snippet => {
  if (!GITHUB_TOKEN) {
    console.log(
      `${chalk.red('x')} Couldn't find GITHUB_TOKEN .env variable...`
    );
    return null;
  }

  try {
    await axios({
      method: 'post',
      url,
      data: {
        tag_name: 'v1.2.0',
        body: snippet
      },
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      json: true
    });
    console.log(`${chalk.green('✓')} Release has been updated!`);
  } catch (e) {
    console.log(
      `${chalk.red('x')} ERROR while creating new release -> ${e.message}`
    );
  }
};

const publishRelease = async () => {
  console.log(`${chalk.green('✓')} START publishing...`);
  const snippet = prepareSnippet();
  await createGithubRelease(snippet);
  console.log(`${chalk.green('✓')} FINISH publishing!`);
};

publishRelease();
