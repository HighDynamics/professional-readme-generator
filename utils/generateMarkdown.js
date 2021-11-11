function renderTableOfContents(data) {
  const fields = [
    'Installation',
    'Usage',
    'Contribute',
    'Tests',
    'Questions',
    'License',
  ];

  const mapFields = fields.map((field) => {
    let number = 0;
    if (data[field.toLowerCase()] !== '' || field === 'Questions') {
      number++;
      return `${number}. [${field}](#${field})`;
    }
  });

  return mapFields();
}

function renderTests(tests) {
  return tests !== '' ? `## Testing <br /> ${tests}` : '';
}

function renderContribute(contribute) {
  return contribute !== '' ? `## Contribute <br /> ${contribute}` : '';
}

function renderUsage(usage) {
  return usage !== '' ? `## Usage <br /> ${usage}` : '';
}

function renderInstallation(installation) {
  return installation !== '' ? `## Installation <br /> ${installation}` : '';
}

const licenses = {
  gnuagplv3: {
    badge:
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    url: '[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)',
  },
  gnugplv3: {
    badge:
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    url: '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
  },
  gnulgplv3: {
    badge:
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    url: '[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)',
  },
  mozillapubliclicense2point0: {
    badge:
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    url: '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
  },
  apachelicense2point0: {
    badge:
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    url: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
  },
  mit: {
    badge:
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    url: '[MIT](https://opensource.org/licenses/MIT)',
  },
  boostsoftware1point0: {
    badge:
      '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    url: '[Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt)',
  },
  theunlicense: {
    badge:
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    url: '[The Unlicense](http://unlicense.org/)',
  },
};

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  const formattedLicense = license
    .replace(' ', '')
    .replace('.', 'point')
    .toLowerCase();

  return licenses[formattedLicense].badge;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  const formattedLicense = license
    .replace(' ', '')
    .replace('.', 'point')
    .toLowerCase();

  return `
    Licensed under the ${licenses[formattedLicense].url} license.
  `;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None'
    ? `## License <br /> ${renderLicenseLink(license)}`
    : '';
}

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribute,
    tests,
    license,
    github,
    email,
  } = data;
  return `
  # ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  ${renderTableOfContents(data)}

  ${renderInstallation(installation)}

  ${renderUsage(usage)}

  ${renderContribute(contribute)}

  ${renderTests(tests)}

  ## Questions
  GitHub profile: [${github}](https://github.com/${github})
  Reach out with additional questions at <${email}>

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
