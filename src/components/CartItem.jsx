import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast"
import { MdDelete } from "react-icons/md";

export const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart =( ) =>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }

  return <div className="w-full">
    <div className="flex border-b-2 h-[200px] pb-3 pt-2 gap-8">

       <div className="">
        <img className="w-[120px] h-[150px]" src={item.image} alt="" />
       </div>
       <div className="flex flex-col w-[300px] gap-5">
        <h1 className="text-gray-700 font-semibold w-50 mt-1 ">{item.title}</h1>
        <h1 className="w-full text-gray-400 font-normal text-[12px] text-left">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</h1>
        <div className="flex justify-between pb-5">
       <div >
        <p className="text-green-600 font-semibold">${item.price}</p>
       </div>
       <div className="flex bg-red-300 rounded-full justify-center w-6">
       <div className="flex items-center justify-center w-6 "
       onClick={removeFromCart}>
        <MdDelete  className=""/>
       </div>
       </div>
       
       </div> 
       </div> 
    </div>
  </div>;
};

export default CartItem;
