// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { spawn } = require('child_process');
const path = require('path'); // Import path module
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

/* app.get('/api/medalsByGender', (req, res) => {
  // Execute the Python script to process data from MongoDB
  exec(`python3 process_medals_by_gender.py`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      return res.status(500).send('Error processing medals data');
    }

    // Send the processed result back to the client
    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (parseError) {
      console.error(`Error parsing Python output: ${parseError}`);
      res.status(500).send('Error parsing medals data');
    }
  });
}); */


/* // Fetch top 15 countries API
app.get('/api/top-countries', async (req, res) => {
  try {
    // Read the JSON file
    const dataPath = path.join(__dirname, 'top_countries.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    
    // Parse the JSON data
    const topCountries = JSON.parse(jsonData);
    
    // Send the response
    res.json(topCountries);
  } catch (error) {
    console.error('Error fetching top countries:', error);
    res.status(500).send('Server error');
  }
});
 */

/* app.get('/api/top-countries', (req, res) => {
  const pythonScriptPath = path.join(__dirname, 'scripts/top_countries.py'); // Update as needed

  // Start the Python process
  const process = spawn('python3', [pythonScriptPath]);

  let outputData = '';

  // Collect data from stdout
  process.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      outputData += data.toString(); // Append to outputData
  });

  // Handle errors from stderr
  process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      // Send error response only if it hasn't been sent yet
      if (!res.headersSent) {
          return res.status(500).send('Server error: ' + data.toString());
      }
  });

  // Handle when the process closes
  process.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
      // Only send response if the process exited successfully
      if (code === 0) {
          try {
              const topCountries = JSON.parse(outputData); // Parse JSON data from script output
              return res.json(topCountries); // Send the parsed data
          } catch (error) {
              console.error('Error parsing JSON:', error);
              return res.status(500).send('Server error: JSON parsing failed');
          }
      } else {
          // If the process did not exit successfully
          if (!res.headersSent) {
              return res.status(500).send('Server error: script exited with code ' + code);
          }
      }
  });
});
 */

app.get('/api/top-countries', (req, res) => {
  const pythonScriptPath = path.join(__dirname, 'scripts/top_countries.py'); // Update as needed

  // Start the Python process
  const process = spawn('python3', [pythonScriptPath]);

  let outputData = '';
  let errorData = '';

  // Collect data from stdout
  process.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      outputData += data.toString(); // Append to outputData
  });

  // Collect errors from stderr
  process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      errorData += data.toString(); // Append to errorData
  });

  // Handle when the process closes
  process.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);

      if (code === 0) {
          // Check if outputData is not empty
          if (!outputData) {
              console.error('No output from Python script');
              return res.status(500).send('Server error: No output from script');
          }

          // Only parse and send the response if the process exited successfully
          try {
              const topCountries = JSON.parse(outputData); // Parse JSON data from script output
              return res.json(topCountries); // Send the parsed data
          } catch (error) {
              console.error('Error parsing JSON:', error);
              return res.status(500).send('Server error: JSON parsing failed - ' + error.message);
          }
      } else {
          // If there were errors during the execution of the script
          console.error('Script execution error:', errorData);
          return res.status(500).send('Server error: script exited with code ' + code + '. Error: ' + errorData);
      }
  });
});



app.get('/api/gender-wise-participation', (req, res) => {
  const pythonScriptPath = path.join(__dirname, 'scripts/gender_wise_parcticipation.py'); // Update as needed

  // Start the Python process
  const process = spawn('python3', [pythonScriptPath]);

  let outputData = '';
  let errorData = '';

  // Collect data from stdout
  process.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);  // Log output from Python
      outputData += data.toString(); // Append to outputData
  });

  // Collect errors from stderr
  process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);  // Log errors from Python
      errorData += data.toString(); // Append to errorData
  });

  // Handle when the process closes
  process.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);

      if (code === 0) {
          // Only parse and send the response if the process exited successfully
          try {
              console.log("Output Data:", outputData);  // Log the final outputData
              const genderParticipation = JSON.parse(outputData); // Parse JSON data from script output
              return res.json(genderParticipation); // Send the parsed data
          } catch (error) {
              console.error('Error parsing JSON:', error);
              return res.status(500).send('Server error: JSON parsing failed');
          }
      } else {
          // If there were errors during the execution of the script
          console.error('Script execution error:', errorData);
          return res.status(500).send('Server error: script exited with code ' + code + '. Error: ' + errorData);
      }
  });
});



// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

