const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

//Cors Settings
var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST, DELETE, OPTIONS',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  exposedHeaders: 'Auth'
};

app.use(cors(corsOptions));

// connect to DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to contact keeper API...' })
);

//Define Routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port: ' + PORT));

// TODO
// -  email lowercase
// -  encrypt jwt token
