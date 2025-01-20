const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
