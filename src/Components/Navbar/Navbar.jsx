import React from 'react';
import { Link } from 'react-router-dom';




  const Navbar =() => {
    return (
        <>

       
        <nav className="navbar navbar-expand-lg py-4  navbar-dark  fixed-top z-1 px-5" style={{backgroundColor:"#2c3e50"}} >
          <div className="container ">
            <Link className="navbar-brand fw-bolder fs-2" href="#" to={""}>START FRAMEWORK</Link>
          </div>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0  fw-bold">
              <li    className="nav-item "> 
        {/* to - elpath ely hayroho */}
    <Link className="nav-link text-white " to={"about"}  >
      
       ABOUT </Link>
              </li> 

              <li>
                <Link className='nav-link text-white' to={"portofolio"}> PORTOFOLIO </Link>
              </li>
              <li>
                <Link className='nav-link text-white' to={"contact"}> CONTACT </Link>
              </li>
         
         
       
              </ul> </div>
        </nav>
        
        
                </>
    );
  }

  export default Navbar;