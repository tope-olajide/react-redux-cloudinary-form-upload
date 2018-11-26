import cors from 'cors'
const express = require('express');
const bodyParser = require('body-parser');
import routes from './routes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())
app.get('/', (req, res) => {
  res.status(201).json({
    title: 'Profile page sample',
    message: 'Welcome to profile page!'
  });
});

app.use('/api/', routes);

let port = 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});