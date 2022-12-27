import React , { useContext }from 'react'
import {useNavigate} from 'react-router-dom'

function Product({product}) {
  const navigate = useNavigate();
  return (
    <div className='product' onClick={() => navigate(`/productdetails/${product.id}`)}>
        <img src={product.image} alt="Product" className='productImg'/>
        <div className="description">
        <p>
          <b>{product.title}</b>
        </p>
        <p>Rs. {product.price}</p>
      </div>
      <button className="addToCartBttn">
        Add To Cart
      </button>
    </div>
  )
}

export default Product