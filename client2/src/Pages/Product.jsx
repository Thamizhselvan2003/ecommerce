import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId} =useParams();
  const product=all_product.find((e)=> e.id===  Number(productId));
  
  
  if (!product) {
    return (
      <div style={{ padding: '80px 8%', textAlign: 'center', backgroundColor: 'var(--bg-light)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--text-dark)' }}>Product Not Found</h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px', fontFamily: 'var(--font-body)' }}>The requested product could not be located. Explore some of our other options below!</p>
        <RelatedProducts />
      </div>
    );
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product