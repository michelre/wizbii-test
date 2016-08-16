const express = require('express');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}`));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/authenticate', (req, res) => {
  req.pipe(request('https://api.wizbii.com/v1/account/validate')).pipe(res);
});

app.post('/news', (req, res) => {
  req.pipe(request('https://api.wizbii.com/v2/dashboard/?direction=newest')).pipe(res);
});

app.listen(PORT, function () {
  console.log(`server is listening on ${PORT}`);
});
