import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const data = useSelector((state) => state?.Cart)





    return (
        <nav className=" w-full h-[60px] bg-black sticky top-0 flex justify-between items-center px-20 ">
            <Link to="/">
                <div className=" font-bold text-white text-2xl"> Online Shopping</div>
            </Link>
            <div className=" text-white flex ">
                <Link to="/cart">
                    <ShoppingCartIcon />
                    <sup className="  text-black border border-black bg-yellow-400 px-2 rounded-full text-sm py-1">{data.CartItem.length} </sup>

                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
