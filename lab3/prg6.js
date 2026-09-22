import http from "http";
import { getallproducts,addproducts } from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getallproducts();
  res.setHeader('content-type','application/json')
  
    res.end(JSON.stringify({msg:"product added", data:
      count:data.length,
      data,
    }),

    );
  }
   
  else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request",req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("received product:", product);

      res.statusCode = 200;
      // res.end("POST Request");
      res.end(JSON.stringify({ msg: "product added", product }));
    });
  }
  
  else if (req.url.startsWith("/products/") === "/" && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("Update Product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      // console.log("received product:", product);
      product.id = productID;
      res.statusCode = 200;

      // res.statusCode = 200;
      // res.end("POST Request");
      res.end(JSON.stringify({ msg: "product updated", product }));
    });
    

    //  res.statusCode = 200;
    // res.end("PUT Request");
  } else if (req.url === "/api/v1/products" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE Request");
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});
server.listen(5000, () => console.log("prg6 is running"));
