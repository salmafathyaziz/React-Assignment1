import React from 'react';
import  image from "../../assets/images/avataaars.svg"
  const Home =() => {
    return (
        <>
      <div className="home py-5 d-flex justify-content-center align-items-center text-white " style={{backgroundColor:"#1abc9c"}}>
  <div  className="text-center py-3">
    <img  src={image} alt className="mb-2 py-5"   style={{width:"200px"}}/>
    <app-star ><div  className="text-center pt-4" style={{color: 'white'}}>
        <h2  className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2><div  className="d-flex align-items-center justify-content-center mb-3">
          <div  className="line me-3" style={{backgroundColor: 'white'}} /><i  className="fa-solid fa-star" />
          <div  className="line ms-3" style={{backgroundColor: 'white'}} /></div></div></app-star>
    <div >Graphic Artist - Web Designer - Illustrator</div>
  </div>
</div>

        </>
    );
  }

  export default Home;