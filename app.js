const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/data', dataRoutes);

// Start the server
const port = 11000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
