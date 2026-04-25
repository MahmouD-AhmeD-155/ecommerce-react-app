import React, { useContext } from "react";
import "./slideProduct.css";
import { FaCartArrowDown, FaCheck, FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function Product({item}) {
  const {cartItems,addToCart} =useContext(CartContext)
  
const inCart = cartItems.some(i =>i.id===item.id)

  return (
    <div className={ `product ${inCart? 'in-cart' : ''}`}>

      <Link to={`/products/${item.id}`}>
      
      <span className="stats-cart"><FaCheck />in cart </span>
      <div className="img_product">
        <img
                src={item.images[0]}
          alt=""
        />
      </div>
      <p className="name_product"> {item.title} </p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price"><span>${item.price}</span> <span className="shh">$1200</span></p>
      </Link>
      <div className="icon">
        <span className="btn-addtocart" onClick={() => addToCart(item)}><FaCartArrowDown /></span>
        <span><FaRegHeart /></span>
        <span><FaShare /></span>
      </div>
    </div>
  );
}

export default Product;
