const generateMarkdown = require('./utils/generateMarkdown.js');
const promptReadMe = require('./utils/inquirerPrompts.js');
const writeToFile = require('./utils/writeToFile.js');

// TODO: Create a function to initialize app
function init() {
  promptReadMe().then((data) => console.log(data));
}

// Function call to initialize app
init();
