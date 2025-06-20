import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading , setLoading] = useState(false)
  const [post, setPost] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{

      const res = await fetch(API_URL);
      const data = await res.json();

      setPost(data);


  }catch(error){
    console.log("error");
    setPost([]);

  }
  setLoading(false);
    
  }

  useEffect(() =>{
    fetchProductData();
  },[])

  return (
  <div>
     
     {
      loading ? <Spinner/> :
      post.length > 0 ?
      (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5
      space-y-10 min-h-[80vh]">
        {
        post.map((post) => (
          <Product key={post.id} post={post}/>
      ) )
     }
     </div>) :
     <div className="flex justify-center items-center">
        <p>No Data Found</p>
     </div>
    }
  </div>
  );
};

export default Home;
