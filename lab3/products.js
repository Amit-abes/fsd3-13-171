const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "pen", qty: 50, price: 10 },
];
let nextId = 3;
// Get all products
export const getAllProducts = () => {
  return products;
};
// Add product
export const addProduct = (item) => {
  item.id = nextId;
  nextId++;
  products.push(item);
  return item;
};
// Delete product
export const deleteProduct = (pid) => {
  const item = products.findIndex((prd) => prd.id === id);

  if (item == -1) {
    return false;
  }
  products.splice(item, 1);
  console.log("Products remaining:", products);
  return true;
};
//create a function update any product given pid call this function in prg6.js amd verify its working by echo api
export const updateProduct = (pid, updateItem)=>{
  const item = products.findIndex((prd)=>prd.id ===pid);
  if(item==-1){
    return false;
  }
  updateItem.id =pid;
  products[item],updateItem;
  return true;
};
export const getProductById =(pid) => {
  const index = products.findIndex((prd) => prd.id===pid);

  if(index==-1){
    return false;
  }
  return products[index];
};