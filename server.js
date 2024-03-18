const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Define static directory for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Route handler for user login
app.post('/login', (req, res) => {
  // Here you should handle the login functionality
  const { username, password } = req.body;
  
  // Example validation (you need to replace this with your actual validation logic)
  if (username === 'admin' && password === 'password') {
    // Authentication successful
    res.send('Login successful');
  } else {
    // Authentication failed
    res.status(401).send('Invalid username or password');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

  
