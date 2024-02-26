const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/readingSync.txt',
'utf8')
const second = readFileSync('./content/readingSync2.txt', 'utf8')
console. log (first,second);
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,{flag : 'a'}); // flag a for append you can remove all the pracitce
//if the file is exist -> overwrite
// else create new file and write in it
