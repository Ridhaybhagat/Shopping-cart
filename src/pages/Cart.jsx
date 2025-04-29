import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartItem from "../components/CartItem";

export const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() =>{
    setTotalAmount (cart.reduce ((acc, curr) => acc + curr.price, 0) );
  },[cart])
  
  return (<div className="">
    {
      cart.length > 0 ?
      ( <div className="flex justify-center items-center gap-8">
         <div className="">
          { 
          cart.map((item, index) => {
            return <CartItem key ={item.id} item={item} itemIndex={index}/>
          })
        }
         </div>
           <div className="">
           <div className="gap-2 flex flex-col justify-start pb-[100px] w-[120px] h-[300px]">
            <div className="text-green-600 font-semibold uppercase">Your Cart</div>
            <div className="text-green-600 font-semibold text-4xl uppercase">Summary</div>
            <p>
              <span>Total Item: {cart.length}</span>
            </p>
          </div> 

          <div className="flex flex-col justify-end pt-40">
          <p>Total Amount: <span className="font-semibold">${totalAmount}</span></p> 
          <button className="bg-green-600  font-semibold text-white rounded-[5px] w-[300px] h-[40px]">
            Checkout Now
          </button>
          </div> 
          </div>
          

        </div>):
        (<div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-gray-700 font-semibold text-xl mb-2">
        <h1>Your cart is empty</h1>
        <Link to={"/"}>
        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
          Shop Now
        </button>
        </Link>
      </div>
      </div>)
    }
  </div>
  )
};

export default Cart;
