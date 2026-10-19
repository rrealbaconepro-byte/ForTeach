const http = require('http');
const fs = require('fs');
const path = require('path');

// Render automatically defines the PORT environment variable
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Path to your default 500 error HTML file
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Fallback plain text if the file is missing
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
        } else {
            // Serve the raw HTML with an authentic 500 status code
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
