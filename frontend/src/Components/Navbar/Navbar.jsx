import React, { useRef, useState } from 'react'
import'./Navbar.css'
import logo from'../Assets/logo4.webp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getCartCount} = useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle= (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')

    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>EBUY</p>
        </div>
        <span  className='nav-dropdown'>
        <i class="fa fa-hamburger" onClick={dropdown_toggle} />
        </span>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><i class="fa fa-shopping-cart"></i></Link>
            <div className='nav-cart-count'>{getCartCount()}</div>
        </div>

        </div>
  )
}


export default Navbar