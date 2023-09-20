const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//Initializes a new express application handles HTTP requests and middleware
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//connect to database
mongoose.connect(
  'mongodb+srv://lauraramirez0507:EwmxawyuUU4RqGQe@cluster0.xpnqpj0.mongodb.net/Anxiety-Grounding-App?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, //tells it to use the new Node version for URL string parser,instead of the depricated one
    useUnifiedTopology: true, //use new topology engine
  }
);

//cheking to see if I was able to connect to the database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB');
});

//ROUTES
app.get('/', (req, res) => {
  console.log('hello');
  res.status(200).sendFile(__dirname, '../client/public/index.html');
});

app.post('/api', (req, res) => {
  console.log('hello');
  console.log(req.body);
});

app.get('/api/sign-up', (req, res) => {
  console.log('inside of get signup');
  res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.post('/sign-up', (req, res) => {
  console.log('hellooo');
  res.status(200);
});

app.use((req, res) => res.sendStatus(404));

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
