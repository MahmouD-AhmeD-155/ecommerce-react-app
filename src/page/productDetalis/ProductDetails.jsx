import React, { useEffect, useState } from "react";
import { FaCartPlus, FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./productDetails.css"
import SlideProduct from "../../components/slideProducts/SlideProduct";
import { GiSandsOfTime } from "react-icons/gi";
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([])
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)
 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => { 
    if(!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
    .then((res)=> res.json())
    .then((data)=>{

      setRelatedProducts(data.products)
    })
    .catch((error)=>console.error(error))
    .finally(() =>  setLoadingRelatedProducts(false)  )
   },[product?.category])


   console.log(product);
   console.log(relatedProducts);



  if (loading) return <p className="loading"><GiSandsOfTime />Loading.....</p>;
  if (!product) return <p >Product NoT Found .....</p>;

  return (

    <div> 
    <div className="item-details">
      <div className="container">
        <div className="imgs-item">
          <div className="big-img">
            <img id="big-img" src={product.images[0]} alt={product.title} />
          </div>
          <div className="sm-img">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={product.title} onClick={()=>document.getElementById("big-img").src = img}/>
            ))}
          </div>
        </div>

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

          <button className="btn">
            Add To cart <FaCartPlus />
          </button>
          <div className="icons">
       
        <span><FaRegHeart /></span>
        <span><FaShare /></span>
      </div>
        </div>
      </div>
    </div>

              {loadingRelatedProducts? (
                <p className="loading">Loading......</p>
              ):(
                <SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-", " ")}/>
              )
              
              }

    </div>



  );
}

export default ProductDetails;
