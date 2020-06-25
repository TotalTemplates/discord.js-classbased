const { readdirSync, statSync } = require('fs');

// from https://gist.github.com/kethinov/6658166
function readRecursively(dir, filelist) {
  let filels = filelist || [];
  const files = readdirSync(dir);
  files.forEach((file) => {
    if (statSync(`${dir}/${file}`).isDirectory()) filels = readRecursively(`${dir}/${file}`, filels);
    else filels.push(`${dir}/${file}`);
  });

  return filels;
}

module.exports = { readRecursively };
