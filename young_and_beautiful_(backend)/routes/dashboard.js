 
const express = require('express');
const router = express.Router();

// Example of protected route
router.get('/', (req, res) => {
  if (req.session.userId) {
    res.send('Welcome to the dashboard');
  } else {
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;
