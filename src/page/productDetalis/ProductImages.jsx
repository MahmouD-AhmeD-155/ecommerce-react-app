import React from 'react'

function ProductImages({product}) {
  return (
    <div className="imgs-item">
    <div className="big-img">
      <img id="big-img" src={product.images[0]} alt={product.title} />
    </div>
    <div className="sm-img" >
      {product.images.map((img, index) => (
        <img key={index} src={img} alt={product.title} onClick={()=>document.getElementById("big-img").src = img}/>
      ))}
    </div>
  </div>
  )
}

export default ProductImages