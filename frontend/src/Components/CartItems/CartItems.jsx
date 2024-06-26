import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const { getCartTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    const { checkOut, setCheckout } = useState('')
    const handleCheckout = (e) => {
        console.log(cartItems)
        if (cartItems > 0) {
            alert("Thank you for Shopping with us. Shipping details will be send to your email.");
        } else {
            alert("Nothing to checkout at this moment. Please continue shopping.");
        }
    }
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]} </button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>

                            <p>Subtotal</p>
                            <p>${getCartTotalAmount()}</p>
                        </div>
                        <hr />

                        <div className='cartitems-total-item'>
                            <p>Shipping Fee </p>
                            <p> Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getCartTotalAmount()}</h3>
                        </div>
                    </div>

                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </div>

                <div className='cartitems-promocode'>
                    <p>If you have a promo code, enter it here</p>
                    <div className='cartitems-promocode-box'>
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
