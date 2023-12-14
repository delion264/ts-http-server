import * as http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "Header");
	res.end("Hello World!");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

const address = server.address();
if (typeof address === "string") {
	console.log(`${address}`);
} else if (address !== null && typeof address === "object" && port in address) {
	console.log(`${address.port}`);
}
