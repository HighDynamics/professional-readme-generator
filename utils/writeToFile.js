const fs = require('fs');

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generated-README.md', data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README generated. Check the "dist" folder.',
      });
    });
  });
};

module.exports = writeToFile;
