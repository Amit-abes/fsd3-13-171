import http from "http";
import {reviews} from "./data.js";
const server = http.createServer((req, res) => {
  const products = {
    id: 1,
    name: "Mobile",f
    price: 25000,
    rating: 4.7,
    review: 225,
  };

  const item = [
    {
      id: 1,
      name: "Smartphone",
      prize: 24999,
      image: "https://example.com/images/smartphone.jpg",
      desc: "A modern smartphone with a high-resolution display and powerful processor.",
    },
    {
      id: 2,
      name: "Laptop",
      prize: 54999,
      image: "https://example.com/images/laptop.jpg",
      desc: "A lightweight laptop suitable for programming, study, and everyday work.",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      prize: 3999,
      image: "https://example.com/images/headphones.jpg",
      desc: "Wireless headphones with clear sound and comfortable ear cushions.",
    },
    {
      id: 4,
      name: "Smart Watch",
      prize: 2999,
      image: "https://example.com/images/smartwatch.jpg",
      desc: "A smart watch for fitness tracking, notifications, and daily activities.",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      prize: 2499,
      image: "https://example.com/images/keyboard.jpg",
      desc: "A responsive mechanical keyboard designed for gaming and programming.",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      prize: 999,
      image: "https://example.com/images/mouse.jpg",
      desc: "An ergonomic wireless mouse with precise tracking and long battery life.",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      prize: 1999,
      image: "https://example.com/images/speaker.jpg",
      desc: "A portable Bluetooth speaker that delivers powerful sound in a compact design.",
    },
    {
      id: 8,
      name: "Power Bank",
      prize: 1499,
      image: "https://example.com/images/powerbank.jpg",
      desc: "A high-capacity power bank for charging smartphones and other devices.",
    },
    {
      id: 9,
      name: "Gaming Monitor",
      prize: 15999,
      image: "https://example.com/images/monitor.jpg",
      desc: "A fast gaming monitor with a high refresh rate and sharp display.",
    },
    {
      id: 10,
      name: "USB-C Hub",
      prize: 1299,
      image: "https://example.com/images/usbc-hub.jpg",
      desc: "A compact USB-C hub that provides multiple ports for laptops and other devices.",
    },
  ];
  if (req.url === "/api/products") {
    //  res.end(JSON.stringify(products));
    res.end(JSON.stringify(products));
  } else {
    res.statusCode(404);
    res.end();
  }
});

server.listen(3000, () => console.log("prg4 is running..."));
