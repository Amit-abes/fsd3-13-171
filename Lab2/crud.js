import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();

  products.push(item);

  await saveCart(products);
};

const showCart = async () => {
  const products = await getCart();

  console.log("\n----- Cart Items -----");

  if (products.length === 0) {
    console.log("Cart is empty!");
    return;
  }

  products.forEach((item) => {
    console.log(
      `ID: ${item.id} | Name: ${item.name} | Price: ${item.price} | Quantity: ${item.qty}`,
    );
  });
};

const updateCart = async (id, qty) => {
  const products = await getCart();

  const item = products.find((product) => product.id === id);

  if (item) {
    item.qty = qty;

    await saveCart(products);

    console.log("Quantity updated successfully ✅");
  } else {
    console.log("Item not found ❌");
  }
};

const deleteFromCart = async (id) => {
  const products = await getCart();

  const newProducts = products.filter((product) => product.id !== id);

  if (products.length === newProducts.length) {
    console.log("Item not found ❌");
  } else {
    await saveCart(newProducts);
    console.log("Item deleted successfully ✅");
  }
};

const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let choice;

  do {
    console.log("\nWelcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        let data = await cin.question("enter id , name,price,qty: ");
       let p= data.split(",");
       

        console.log(data);

        break;

      case 2:
        await showCart();

        break;

      case 3:
        const deleteId = Number(
          await cin.question("Enter item ID to delete: "),
        );

        await deleteFromCart(deleteId);

        break;

      case 4:
        const updateId = Number(await cin.question("Enter item ID: "));

        const newQty = Number(await cin.question("Enter new quantity: "));

        await updateCart(updateId, newQty);

        break;

      case 5:
        console.log("See you later...😃");

        break;

      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != "5");

  cin.close();
};

main();
