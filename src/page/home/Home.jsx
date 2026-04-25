import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/heroSlider/HeroSlider'
import "./home.css"
import SlideProduct from '../../components/slideProducts/SlideProduct'
import { GiSandsOfTime } from 'react-icons/gi'
import MotionPage from '../../components/MotionPage'


const categories =[

  "mobile-accessories",
  "mens-watches",
  "smartphones",
  
  "sunglasses",
  "sports-accessories",
  "beauty",
]
function Home() {
  const [products,setProducts] =useState({})
  
  const [loading,setLoading] =useState(true)
    useEffect(() => { 
      const fetchProducts = async () => {
        try {
          const results = await Promise.all (
              categories.map(async (category) => { 
                const res = await fetch(`https://dummyjson.com/products/category/${category}`)
                  const data =await res.json();
                  return {[category] : data.products}
               })

          )
            const productsData = Object.assign({}, ...results)
            setProducts(productsData)
        }catch (error) {
          console.error("Error Fetching" ,error)
        }finally{
          setLoading (false)
        }
      }

      fetchProducts()
     },[])


  return (

    <MotionPage>

   
    <div>
        <HeroSlider/>

      {
        loading ? (<p className="loading"><GiSandsOfTime /> Loading ...</p>) : (
   categories.map((category) => (
          
          <SlideProduct key={category} title={category.replace("-", " ")} data={products[category]} />
        ))

        )
      }

     


    </div>
    </MotionPage>
  )
}

export default Home