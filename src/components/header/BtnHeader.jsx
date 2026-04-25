import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdPersonAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function BtnHeader() {
  const [showList , setShow] =useState(false);
   
  const location = useLocation(); 
  const [categories, setCategories] = useState([]);
  const NavLinks = [
    { title: "Home", link: "/", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Accessories", link: "/accessories", id: 3 },
    { title: "Blog", link: "/blog", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ];
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="btn_header">
      <div className="container">
        <nav className="nav">

          <div className="category">
            <div className="category_btn " onClick={() => setShow(showList===false? true : false)} >
              <IoMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div className={showList===true?"category_list active" :"category_list"} >
              {categories.map((item) => {
                return (
                  <Link key={item.url} to={item.slug}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
          </div>
          

          <div className="nav_links">
            {NavLinks.map((item) => (
           <li key={item.id} className={location.pathname === item.link? "active" : " "}>
              <Link  to={item.link}>
                {item.title}
              </Link>

           </li>
            ))}
          </div>
        </nav>

        <div className="sign_icon">
          <Link to="/">
            {" "}
            <MdOutlineLogout />
          </Link>
          <Link to="/">
            {" "}
            <IoMdPersonAdd />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtnHeader;
