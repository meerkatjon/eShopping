import React, { Component, createContext, useEffect, useState } from 'react'
import { baseUrl } from '../url'
//import all_product from '../Components/Assets/all_product.js'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())

    //useeffect hook is used to load when component is loaded
    useEffect(() => {
        fetch(`${baseUrl}/allproducts`, { mods: 'cors' })
            .then((res) => res.json())
            .then((data) => { setAll_Product(data) })
        if (localStorage.getItem('auth-token')) {
            fetch(`${baseUrl}/getcart`, {
                method: 'POST',
                headers: {
                    Accept: 'Application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-type': 'application/json'
                },
                body: ""
            }).then((response) => response.json())
                .then((data) => setCartItems(data));
        }

    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch(`${baseUrl}/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch(`${baseUrl}/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }

    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) { //check quantity is greater than 0
                let iteminfo = all_product.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * iteminfo.new_price//to access the quantity * by product new price

            }
        }
        return (totalAmount);
    }

    const getCartCount = () => {
        let totalitem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalitem += cartItems[item]
            }
        }
        return totalitem
    }

    const contextValue = { getCartTotalAmount, all_product, cartItems, addToCart, removeFromCart, getCartCount }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider