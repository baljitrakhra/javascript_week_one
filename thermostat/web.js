const thermostat = require("./thermostat");
const express = require("express");
const Thermostat = require("./thermostat");
const app = express();
const port = 3000;

const thermostatClass = new Thermostat;

app.get('/temperature', (req, res) => {
  res.send(JSON.stringify(thermostatClass.getTemperature()));
});

app.post('/up', (req, res) => {
  thermostatClass.up();
  res.send('');
});

app.post('/down', (req, res) => {
  thermostatClass.down();
  res.send('');
});

app.delete('/temperature', (req, res) => {
  thermostatClass.reset();
  res.send('');
});

app.listen(port);
