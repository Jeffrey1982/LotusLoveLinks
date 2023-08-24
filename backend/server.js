const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db'); // Keep the original path if the db.js is in the root folder of your backend.
const usersRoutes = require('./controllers/users');
const photosRoutes = require('./routes/photos'); // New route file import.

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Use the user routes under the '/api/users' path
app.use('/api/users', usersRoutes);

// Use the photos routes under the '/api/photos' path
app.use('/api/photos', photosRoutes); // Using the new route file here.

app.get('/', (req, res) => {
  res.send('Welcome to the dating app backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
