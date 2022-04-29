const express = require('express');

const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) =>{
  
  res.send(`Counter: ${counter}`)
});
app.post('/counter', (req, res) =>{
    res.send(counter += 1);
});

console.log(`Server Listning on localhost:${port}`);
app.listen(port);
