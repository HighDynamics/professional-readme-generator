const generateMarkdown = require('./utils/generateMarkdown.js');
const promptReadMe = require('./utils/inquirerPrompts.js');
const writeToFile = require('./utils/writeToFile.js');

function init() {
  promptReadMe()
    .then((data) => generateMarkdown(data))
    .then((markdown) => writeToFile(markdown))
    .then((writeFileResponse) => console.log(writeFileResponse.message))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
