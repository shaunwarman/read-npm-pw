const Child = require('child_process');
const FS = require('fs');

Child.exec('whoami', {}, (error, stdout) => {
  const path = `/Users/${stdout.trim()}/.npmrc`;

  FS.readFile(path, (err, data) => {
    const pw = Buffer.from(data.toString('utf8').split('\n')[1].split('=')[1], 'base64').toString('utf8');
    console.log(pw);
  });
});
