import React, { useContext } from 'react'
import { FaCartPlus, FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { CartContext } from '../../components/context/CartContext'
import { useNavigate } from 'react-router-dom'

function ProductInfo({product}) {
    const {cartItems,addToCart} =useContext(CartContext)
    const inCart = cartItems.some(i =>i.id===product.id)
    const handleAddToCart = () => {
        addToCart(product);
    }
  return (
    <div className="details-item">
    <h1 className="name">{product.title} </h1>
    <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div>
    <p className="price">{product.price} </p>
    <h5>Availability: <span>{product.availabilityStatus} </span></h5>
    <h5>Brand: <span>{product.brand} </span></h5>
    <p className="desc">{product.description}</p>
    <h5 className="stock">Hurry Up! Only <span>{product.stock} </span>  products left in stock </h5>

    <button onClick={handleAddToCart} className={`btn  ${inCart? 'in-cart' : ''}`}>
     {inCart ? "item in cart" :" Add To cart "} <FaCartPlus />
    </button>
    <div className="icons">
 
  <span><FaRegHeart /></span>
  <span><FaShare /></span>
</div>
  </div>
  )
}

export default ProductInfo