const express = require('express');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});