"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var hostname = "127.0.0.1";
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "Header");
    res.end("Hello World!");
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
var address = server.address();
if (typeof address === "string") {
    console.log("".concat(address));
}
else if (address !== null && typeof address === "object" && port in address) {
    console.log("".concat(address.port));
}
