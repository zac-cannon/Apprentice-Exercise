const express = require('express');
const app = express();

app.get('/', (request, response) => {
  const data = {
    message: "My name is Zachary",
    timestamp: Date.now()
  };
  //Minify JSON object
  const minifiedJSON = JSON.stringify(data);
  response.send(minifiedJSON);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});