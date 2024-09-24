const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/olympics', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema for Registration and Login
const medalSchema = new mongoose.Schema({
  Name: String,
  Sex: String,
  Age: Number,
  Height: Number,
  Weight: Number,
  Team: String,
  NOC: String,
  Games: String,
  Year: Number,
  Season: String,
  City: String,
  Sport: String,
  Event: String,
  Medal: String, // 'Gold', 'Silver', 'Bronze'
}, { collection: 'athlete_db' });

const Medal = mongoose.model('athlete_db', medalSchema);

// Athlete Registration Schema for Health Metrics
const athleteSchema = new mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  cholesterol: Number,
  sugar: Number,
  bp: String,
  heartRate: Number,
  oxygenSaturation: Number,
  vo2Max: Number,
  coreTemp: Number,
}, { collection: 'athlete_health' });

const Athlete = mongoose.model('athlete_health', athleteSchema);

// Registration Route for User
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// New Athlete Registration Route (Health Metrics)
app.post('/api/registerAthlete', async (req, res) => {
  const {
    name, age, height, weight, cholesterol, sugar, bp, heartRate, oxygenSaturation, vo2Max, coreTemp
  } = req.body;

  try {
    const newAthlete = new Athlete({
      name,
      age,
      height,
      weight,
      cholesterol,
      sugar,
      bp,
      heartRate,
      oxygenSaturation,
      vo2Max,
      coreTemp,
    });

    await newAthlete.save();
    res.status(201).send('Athlete registered successfully');
  } catch (error) {
    console.error('Error registering athlete:', error);
    res.status(500).send('Server error');
  }
});

// Fetch medals
app.get('/api/medals', async (req, res) => {
  try {
    const medals = await Medal.find({});

    res.json(medals);
  } catch (error) {
    console.error('Error fetching medals:', error);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
