// render table of contents based on user input
function renderTableOfContents(data) {
  const fields = [
    'Installation',
    'Usage',
    'Contribute',
    'Testing',
    'Questions',
    'License',
  ];

  let number = 0;
  const mapFields = fields.map((field) => {
    if (data[field.toLowerCase()] !== '' || field === 'Questions') {
      number++;
      return `${number}. [${field}](#${field})`;
    }
  });

  return mapFields.join('\n');
}

// render test instructions if provided
function renderTests(tests) {
  if (tests === '') {
    console.log('Testing blank, skipping section.');
    return '';
  } else {
    return `
  ## Testing  
  ${tests}
  `;
  }
}

// render contribute instructions if provided
function renderContribute(contribute) {
  if (contribute === '') {
    console.log('Contribute blank, skipping section.');
    return '';
  } else {
    return `
  ## Contribute  
  ${contribute}
  `;
  }
}

// render usage instructions if provided
function renderUsage(usage) {
  if (usage === '') {
    console.log('Usage blank, skipping section.');
    return '';
  } else {
    return `
  ## Usage  
  ${usage}
  `;
  }
}

// render installation instructions if provided
function renderInstallation(installation) {
  if (installation === '') {
    console.log('Installation blank, skipping section');
    return '';
  } else {
    return `
  ## Installation  
    ${installation}
  `;
  }
}

const licenses = {
  gnugplv3: {
    badge:
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    url: '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
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
  theunlicense: {
    badge:
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    url: '[The Unlicense](http://unlicense.org/)',
  },
};

// function to format user-selected license to match keys in licenses object
const formatLicense = (license) =>
  license.replaceAll(' ', '').replace('.', 'point').toLowerCase();

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  const formattedLicense = formatLicense(license);

  return licenses[formattedLicense].badge;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  const formattedLicense = formatLicense(license);

  return `Licensed under ${licenses[formattedLicense].url}.`;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    console.log('No license selected, skipping section');
    return '';
  } else {
    return `
  ## License
  ${renderLicenseLink(license)}`;
  }
}

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contribute,
    testing,
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

  ${renderTests(testing)}

  ## Questions
  GitHub profile: [${github}](https://github.com/${github})  
  Reach out with additional questions at <${email}>

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
