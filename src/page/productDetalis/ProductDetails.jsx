import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import { GiSandsOfTime } from "react-icons/gi";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import MotionPage from "../../components/MotionPage";
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

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
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);



  if (!product) return   <p className="loading">
  <GiSandsOfTime />
  Loading.....
</p>;

  return (
<MotionPage key={id}>



    <div>
      {loading ? (
        <p className="loading">
          <GiSandsOfTime />
          Loading.....
        </p>
      ) : (
        <div className="item-details">
          <div className="container">
            <ProductImages product={product} />

            <ProductInfo product={product} />
          </div>
        </div>
      )}

      {loadingRelatedProducts ? (
        <p className="loading">Loading......</p>
      ) : (
        <SlideProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
    </MotionPage>
  );
}

export default ProductDetails;
