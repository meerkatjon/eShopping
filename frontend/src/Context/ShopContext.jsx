import React, { Component, createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product.js'

export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0
    }
    return cart
}

const ShopContextProvider=(props)=>{
    
    const [cartItems,setCartiTems] = useState(getDefaultCart())
    const addToCart = (itemId)=>{
        setCartiTems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId)=>{
        setCartiTems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getCartTotalAmount = ()=>{
        let totalAmount = 0;
        for(let item in  cartItems){
            if(cartItems[item]>0){ //check quantity is greater than 0
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += cartItems[item] * iteminfo.new_price//to access the quantity * by product new price
                
            }
        }
            return(totalAmount);
    }
    
    const getCartCount =()=>{
        let totalitem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitem += cartItems[item]
            }
        }
        return totalitem
    }

    const contextValue = {getCartTotalAmount,all_product,cartItems,addToCart,removeFromCart,getCartCount}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider