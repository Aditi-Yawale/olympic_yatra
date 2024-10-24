const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { spawn } = require('child_process');
const path = require('path'); // Import path module
const app = express();
const port = 3001;
const nodemailer = require('nodemailer');


// Middleware
app.use(cors());
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    otp: { type: String }, // Ensure this field is defined
    isVerified: { type: Boolean, default: false } // User is not verified until OTP is confirmed
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any other email service
  auth: {
    user: 'yawaleaditi@gmail.com', // Replace with your email
    pass: 'zkfz gpmm pcvc qklb' // Replace with your email password
  }
});

// OTP Generation function
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}

// User Registration with OTP
app.post('/register-user', async (req, res) => {
  const { username, email } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send('User already exists');
    }

    const otp = generateOTP(); // Generate OTP

    // Store OTP temporarily in user session or database
    const newUser = new User({
      username,
      email,
      otp, // Store OTP
      isVerified: false // User is not verified until OTP is confirmed
      // Do not include password here, as it will be set later
    });

    // Send OTP to user's email
    const mailOptions = {
      from: 'yawaleaditi@gmail.com',
      to: email,
      subject: 'Your OTP for Signup',
      text: `Your OTP is ${otp}`
    };

    // Send the OTP email
    await transporter.sendMail(mailOptions);

    // Save the user to the database (without password)
    await newUser.save();
    res.status(201).send('OTP sent to email. Please verify.');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Server error');
  }
});



// OTP Verification Route
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user) {
          console.log('User not found for email:', email);
          return res.status(400).send({ success: false, message: 'User not found' });
      }
      
      console.log('Received OTP:', otp);
      console.log('User OTP:', user.otp);

      // Ensure both values are compared as strings
      if (user.otp.trim() === otp.trim()) {
          user.isVerified = true;
          await user.save();
          return res.status(200).send({ success: true, message: 'User verified successfully' });
      } else {
          return res.status(400).send({ success: false, message: 'Invalid OTP' });
      }
  } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).send('Server error');
  }
});

app.post('/set-password', async (req, res) => {
  const { email, password } = req.body;

  try {
      console.log("Looking for user with email:", email); // Debugging line
      const user = await User.findOne({ email });

      if (!user) {
          console.log("User not found"); // Debugging line
          return res.status(400).send({ success: false, message: 'User not found' });
      }

      if (!user.isVerified) {
          return res.status(400).send({ success: false, message: 'User not verified' });
      }

      // Check if the password field already exists
      if (!user.password) {
          // Hash the password before saving it
          user.password = await bcrypt.hash(password, 10); // Hash the password
          await user.save();
          console.log("Password set successfully for user:", email); // Debugging line
          return res.send({ success: true, message: 'Password set successfully' });
      } else {
          // If the password field already exists, you might want to handle it differently
          return res.status(400).send({ success: false, message: 'Password already set' });
      }
  } catch (error) {
      console.error('Error setting password:', error);
      res.status(500).send('Server error');
  }
});






// Login Route (Only allow login if user is verified)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }

    if (!user.isVerified) {
      return res.status(400).send('User is not verified. Please verify using OTP.');
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1d' });
      res.json({ token });
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});


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

const userProfileSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  age: Number,
  medicalHistory: {
    diagnosis: String,
    treatment: String
  },
  experience: {
    districtLevel: String,
    stateLevel: String,
    nationalLevel: String,
    internationalLevel: String
  }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);


app.post('/api/user', async (req, res) => {
  const { _id, name, email, age, medicalHistory, experience } = req.body;

  try {
    const newUser = new UserProfile({
      _id,
      name,
      email,
      age,
      medicalHistory,  // Added medical history
      experience        // Added experience
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send('Error adding profile: ' + error.message);
  }
});


app.get('/api/user/:id', async (req, res) => {
  try {
    const user = await UserProfile.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to update the user profile

app.put('/api/user/:id', async (req, res) => {
  const { name, email, age, medicalHistory, experience } = req.body;

  try {
    const user = await UserProfile.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        age,
        medicalHistory,  // Added medical history
        experience        // Added experience
      },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).send('User not found');

    res.send(user);
  } catch (error) {
    res.status(500).send('Error updating profile: ' + error.message);
  }
});


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
  const { email, password } = req.body; // Expecting email and password in the request body

  try {
      // Find the user based on the email
      const user = await User.findOne({ email });

      // Check if the user exists and is verified
      if (!user || !user.isVerified) {
          return res.status(400).send({ success: false, message: 'User not verified or not found' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update the existing user's password
      user.password = hashedPassword; // Store the hashed password
      await user.save(); // Save the updated user document

      res.status(200).send('User registered successfully'); // Success response
  } catch (error) {
      console.error('Error during registration:', error); // Log the error
      res.status(500).send('Server error'); // Send a server error response
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
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1d' });
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
