import React, { useRef, useState } from 'react'
import'./Navbar.css'
import logo from'../Assets/logo_genii.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    //const[menu,setMenu]=useState("shop")
    const[menu,setMenu]=useState()
    
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
            {/* <h1><i>Genii</i></h1> */}
        </div>
        <span  className='nav-dropdown'>
        <i class="fa fa-hamburger" onClick={dropdown_toggle} />
        </span>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>} 
            <Link to='/cart'><i class="fa fa-shopping-cart"></i></Link>
            <div className='nav-cart-count'>{getCartCount()}</div>
        </div>

        </div>
  )
}


export default Navbar