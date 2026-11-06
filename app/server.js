const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "v1.0";

const server = http.createServer((req, res) => {

    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        return res.end(JSON.stringify({
            status: "Healthy",
            version: VERSION,
            timestamp: new Date().toISOString()
        }));
    }

    let filePath = path.join(
        __dirname,
        req.url === "/" ? "index.html" : req.url
    );

    const ext = path.extname(filePath);

    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript"
    };

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(404);
            return res.end("404 - File Not Found");
        }

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "text/plain"
        });

        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});