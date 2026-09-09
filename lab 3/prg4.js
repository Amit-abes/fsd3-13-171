import http from "http";

const server = http.createServer((req, res) => {
  const product = {
    id: 1,
    name: "mobile",
    price: 25000,
    rating: 4.5,
    reviews: 200,
  };
  if (req.url == "/api/product") {
    res.end(JSON.stringify(product));
  } else {
    res.statusCode = 404;
    res.end;
  }
});

server.listen(3000, () => {
  console.log("prg4 is running ...");
});
