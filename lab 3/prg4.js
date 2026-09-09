import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.end(
      JSON.stringify({
        id: 1,
        name: "Mobile",
        price: 25000,
        rating: 4.7,
        review: 200,
      }),
    );
  }
});

server.listen(3000, () => console.log("prg4 is running..."));
