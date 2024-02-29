import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const{addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img className="productdisplay-main-img" src={product.image} alt=""  />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={stardull_icon} alt="" />
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-prices-old">${product.old_price}</div>
                <div className="productdisplay-right-prices-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem vel perspiciatis, quo eaque esse eius tempore iure eligendi? Suscipit vitae distinctio id odit praesentium quaerat in tempore rem itaque.
            </div>
            <div className="productdisplay-right-size">
                <h1>select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
                    <button className='productdisplay-right-button' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                    <p className="productdisplay-right-category">
                        <span>Category:</span>
                        Women, Tshirt, Crop Top 
                    </p>
                    <p className="productdisplay-right-tags">
                        <span>Tags:</span>
                        modern, latest
                    </p>
                </div>
            
    </div>
  )
}

export default ProductDisplay