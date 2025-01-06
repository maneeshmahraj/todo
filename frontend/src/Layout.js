import React from 'react'

import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
     
    const navigate=useNavigate();

    
  const handleClick=()=>{
    navigate("cart")
  }
  const handleLogout=()=>{
    localStorage.clear()
    navigate("home")
  }
  return (
    <>
    <nav className='layout'>
       <div className='blgs'>
       <span ><Link to="home" className='blgs-title'>TO-DO-TASK</Link></span>
      
       </div>
       <div className='navbar'>
        <ul>
        {/* <li><Link to="home"  className='navlink' style={{fontWeight:"bold",color:"rgb(34, 44, 63)",fontSize:"18px"}}>Home</Link></li> */}
          <li><Link to="item" className='navlink' href='' style={{fontWeight:"bold",color:"rgb(34, 44, 63)",fontSize:"18px"}} >Add-Items</Link></li>

          
          {/* <li><button onClick={handleClick} className='new-post-btn'>+ New Post</button></li>
          */}

        </ul>
       </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout