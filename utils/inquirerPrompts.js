const inquirer = require('inquirer');

const promptReadMe = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a project title.');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project? (Required)',
      validate: (desciptionInput) => {
        if (desciptionInput) {
          return true;
        } else {
          console.log('Please describe your project.');
          return false;
        }
      },
    },
    {
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Does your project need to be installed by the user to be used?',
      default: false,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions? (Required)',
      when: ({ confirmInstall }) => {
        return confirmInstall ? true : false;
      },
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter installation instructions.');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how to use your project. (RETURN to skip)',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can others contribute to your project? (RETURN to skip)',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe how to test your project. (RETURN to skip)',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your project fall under?',
      choices: [
        'GNU APGLv3',
        'GNU GPLv3',
        'GNU LGPLv3',
        'Mozilla Public License 2.0',
        'Apache License 2.0',
        'MIT',
        'Boost Software 1.0',
        'The Unlicense',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? (ENTER to skip)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      },
    },
  ]);
};

module.exports = promptReadMe;
