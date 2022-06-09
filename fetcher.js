const arg = process.argv.slice(2);
const url = arg[0];
const localPath = arg[1];
const request = require('request');
const fs = require('fs');

const write = function(error, response, body){
  if(response.statusCode === 200){
    fs.writeFile(localPath, body, 'utf-8', err => {
      if (err) {
        console.error(err);
      }
      console.log(`complete! ${body.length} bytes saved to ${localPath}`);
    });

  }

};

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  write(error, response, body);
});

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });