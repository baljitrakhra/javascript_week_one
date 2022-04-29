const express = require('express');

const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) =>{
  res.send(`Counter: ${counter}`);
});

app.post('/counter', (req, res) =>{
  counter += 1;
  res.send('');
  // res.redirect(307, '/increment');
});

app.get('/counter', (req, res) =>{
  res.send(`Counter: ${counter}`);
});
app.delete('/counter', (req,res) => {
  counter = 0
  res.send('')
});

console.log(`Server Listning on localhost:${port}`);
app.listen(port);
