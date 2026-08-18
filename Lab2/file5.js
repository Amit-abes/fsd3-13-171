# FS (File System) Node.js Module
it direct connect with client Os rather than Browser

## Major tasks of the fs module

- Reading and writing files
  - readFile()
  - appendFile()
- File metadata and information
  - stat()
  - lstat()
  - fstat()
- Watching for changes
  - watch()
  - watchFile()
- Streaming large files
  - createReadStream()
  - createWriteStream()
- File operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - symlink()

## CRUD Operation

Create/Insert, Read/Retrieve, Update, Delete

- Each item(id,name,price,qty)
  - Add to cart
  - Show cart
  - Remove from cart
  - Update Quantity from cart

 
import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    console.log("Welcome to Shopping Cart 🛍️");
    console.log("1------ Add to cart");
    console.log("2------ Show Cart");
    console.log("3------ Remove item");
    console.log("4------ Update Quantity");
    console.log("5------ Checkout");

    let choice = await cin.question("Enter your choice: ");

    switch (choice) {
        case "1":
            console.log("Add to cart");
            break;

        case "2":
            console.log("Show Cart items");
            break;

        case "3":
            console.log("Remove item");
            break;

        case "4":
            console.log("Update Quantity");
            break;

        case "5":
            console.log("See you Later....😃");
            break;

        default:
            console.log("Invalid choice! Try again");
    }

    cin.close();
};

main();