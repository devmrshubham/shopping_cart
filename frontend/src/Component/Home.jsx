import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../feature/CartReducer"
import { addToCart } from '../feature/AddToCart';


const Home = () => {


  const dispatch = useDispatch();
  const showData = () => {
    dispatch(getCartData())
  }

  const data = useSelector((state) => state.app)
  localStorage.setItem("cart", JSON.stringify(data.cart))
  const Cart = JSON.parse(localStorage.getItem("cart"))

  const AddData = (data) => {
    dispatch(addToCart(data))


  }





  return (
    <div className=' w-full '>
      <h1>Home</h1>
      <button className="bg-sky-500 px-4 py-2 text-white rounded " onClick={showData}>Show data</button>
      <div className="  flex  justify-around  mx-auto ">


        {
          data.loading ? <div className='text-2xl'>Loading....</div> : Cart?.map((d, i) => {
            return (
              <div className=" mt-10 w-[300px] border-2 p-5  shadow-2xl " key={i}>
                <img src={d.image} className="block" alt="" />
                <div className=" w-full">
                  {d.name} <br />
                  {d.brand} <br />
                  {d.desc}
                  <br />
                  <button onClick={() => AddData(d)} className="bg-cyan-500 px-4 py-1 mt-3 rounded text-white">Add to Cart</button>
                </div>


              </div>
            )
          })
        }</div>

    </div>
  )
}

export default Home
