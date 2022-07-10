const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/about', (req, res) => {
  let about = __dirname + '/index.html';
  res.sendFile(about);
});

app.get('/', (req, res) => {
  res.sendFile();
});
app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`answer is ${Number(req.body.num1) + Number(req.body.num2)}`);
});

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight / height;

  res.send(`Your bmi is ${bmi}`);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
