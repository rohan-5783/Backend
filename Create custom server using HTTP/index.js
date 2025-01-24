const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/home" && req.method == "GET") {
        res.end("Welcome Home page ");
    }
    else if (req.url == "/about" && req.method == "GET") {
        res.end("About page");
    }
    else if (req.url == "/getproductdata" && req.method == "GET") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                res.end("Error reading product data");
            } else {
            res.end(data)
            }
        });
    }
    else if (req.url == "/user" && req.method == "GET") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) {
                res.end("Error reading user data");
            } else {
                res.end(data)
        }
        });
    }
    else {
        res.end("hello");
    }
});

server.listen(3000, () => {
    console.log("server runs at http://localhost:3000");
});
