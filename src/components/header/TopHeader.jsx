import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/top.png'
import { FaRegHeart, FaSearch } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'
import "./header.css"
import { CartContext } from '../context/CartContext'


function TopHeader() {

  const {cartItems} = useContext(CartContext)
  return (
    <div className='top_header'>
      <div className="container">
        <Link className='logo' to="/"  > <img src={Logo} alt="" /></Link>

        <form action="" className='search_box'>
          <input type="text" name="search" id="search" placeholder='Search For Products' />
          <button type='submit'><FaSearch />  </button>
        </form>
          <div className="header_icon">
            <div className="icon">
            <FaRegHeart />
            <span className='count'>0</span>
            
            </div>

            <div className="icon">
              <Link to='/cart'>
            <BsCart4 />
            <span className='count'>{cartItems.length}</span>
              </Link>
            </div>

          </div>
      </div>
    </div>
  )
}

export default TopHeader