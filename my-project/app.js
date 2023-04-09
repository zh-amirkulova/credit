const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('routes/routes');

const app = express();

// Enable CORS for the API
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Register API routes
app.use('/api', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
