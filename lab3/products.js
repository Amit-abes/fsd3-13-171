const products =[
    {id:1,name:'marker',qty:122,price:13},
    {id:2,name:'duster',qty:34,price:10},
]

let nextid=3;
export const getallproducts =() => {
    return products;
}
 export const addproduct =() => {
  item.id = nextid;
  nextid++;
  products.push(item);
  return item;
 };

 export const deleteproduct = (pid)=>{
    const item = products
 }