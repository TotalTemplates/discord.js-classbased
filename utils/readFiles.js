const {readdirSync, statSync} = require('fs');

// from https://gist.github.com/kethinov/6658166
/**
 * @param {string} dir
 * @param {string[]} filelist
 * @return {string[]}
 */
function readRecursively(dir, filelist = []) {
  const files = readdirSync(dir);
  files.forEach((file) => {
    if (statSync(dir + '/' + file).isDirectory()) {
      filelist = readRecursively(dir + '/' + file, filelist);
    } else filelist.push(dir + '/' + file);
  });

  return filelist;
}

module.exports = {readRecursively};
