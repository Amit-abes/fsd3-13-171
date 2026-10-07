const Hello = () =>{
   return  <h2>welcome to raact19</h2>
};


const Book =() => {
   return ( 
       <>
   <h1 className="text-red-600 text-3xl">lets teact</h1>
   <h2>pricee:2222</h2>
   </>

   );
}

export default function App() {
  return (
   <>
    <h1 className="text-4xl text-center bg-pink-600 text-white my-2 p-2">
     welcome to react
    </h1>
   <Hello/>
   <Book/>
   </>
  );
}
