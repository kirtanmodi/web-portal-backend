const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/data', dataRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
