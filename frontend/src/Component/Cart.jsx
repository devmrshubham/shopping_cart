import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotal } from "../feature/AddToCart";

const Cart = () => {
  const data = useSelector((state) => state.Cart);
  console.log(data);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [data])

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const DecHandler = (d) => {
    dispatch(decreaseCart(d))
  }

  const IncriseHandler = (d) => {
    dispatch(addToCart(d))
  }


  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  return (
    <div className=" w-full ">
      <div className=" text-center  mt-2 text-2xl font-sans"> Shopping Cart</div>
      <div className=" mx-auto mt-5  w-[85%] ">
        <div className="flex  justify-between shadow font-sans  py-4 px-8  items-center  ">
          <div className=" flex  justify-between   w-[45%]">
            <span>Product</span>
            <span>Price</span>
          </div>
          <div className=" flex  justify-between  w-[35%]">
            <span>Quantity</span>
            <span>Total</span>
          </div>
        </div>

        {
          data.CartItem.length === 0 ?
            (
              <div className=" text-center mt-10 text-2xl">
                <div className="">Your cart is currently empty</div>
                <div className=" mt-10">
                  <Link to="/"><ArrowBackIcon /> Start Shopping</Link>
                </div>
              </div>

            ) : (
              <div className="flex flex-col gap-y-4">
                {
                  data.CartItem.map((d, i) => {
                    return (
                      <div className=" flex justify-between items-center h-[200px] border-2 shadow-lg w-full">
                        <div className=" flex items-center px-7 justify-between  w-[50%] h-full">
                          <div className="w-[150px]  h-[150px] ">
                            <img src={d.image} className="w-full h-full" alt="" />
                          </div>
                          <div className="  ">
                            {d.name} <br />
                            {d.brand} <br />
                            {d.desc} <br /> <br />
                            <div className="">
                              <button onClick={() => removeHandler(d)} className="bg-red-500 px-6 py-1 text-white rounded">Remove</button>
                            </div>
                          </div>

                          <div className=" pr-9">
                            {d.price}
                          </div>
                        </div>
                        <div className=" flex items-center justify-between px-7 w-[43%] h-full">
                          <div className=" border-2 h-10 flex justify-around items-center text-xl cursor-pointer w-[200px]">
                            <span onClick={() => DecHandler(d)}>-</span>
                            <span>{d.cartQty} </span>
                            <span onClick={() => IncriseHandler(d)}>+</span>
                          </div>
                          <div className="">{d.price * d.cartQty} </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
        }
        <div className="  flex w-full justify-between">
          <div className="clearbutton w-[50%]"> <button onClick={() => clearCartHandler()} className=" bg-orange-500  mt-10 px-6 py-1">Clear Cart</button></div>
          <div className="total ">

            <div className="flex mt-10 mb-5 gap-x-32">
              <span>SubTotal</span>
              <div className=""> {data.CartTotalAmount}</div>

            </div>
            <div className="">Taxes and shipping calculated at checkout</div>
            <div className="my-5"><button className="px-6 py-1  bg-blue-500 text-white">CheckOut</button></div>
            <div className=" text-slate-500"><Link to="/"><ArrowBackIcon /> Start Shopping</Link></div>
          </div>


        </div>
        <br /> <br /> <br />

      </div>

    </div>
  );
};

export default Cart;
