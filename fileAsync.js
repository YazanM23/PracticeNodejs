
const { readFile, writeFile } = require('fs');
readFile('./content/readingSync.txt', 'utf8', (err, result) =>{
if (err) {
console. log (err);
return;
}
console.log(result);

writeFile(
    './content/result-async.txt',
    `Here is the result `,
    (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('done with this task')
    }
  )
})
console.log("iam in end ");