const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      // Improper error handling: doesn't send an error response to the client
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might lead to an error
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));