import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import one from "./assets/images/img1.jpeg"
import two from "./assets/images/img2.jpeg"
import three from "./assets/images/img3.jpeg"
import four from "./assets/images/img4.jpeg"
import five from "./assets/images/img5.jpeg"
import six from "./assets/images/img6.jpeg"
 import seven from "./assets/images/img7.jpeg"
 import eight from "./assets/images/img8.jpeg"
 import nine from "./assets/images/img9.jpeg"
 import ten from "./assets/images/img10.jpeg"
 import eleven from "./assets/images/img11.jpeg"
 import twelve from "./assets/images/img12.jpeg"


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <Footer></Footer>
  </div>
)
// <---------------------navbar section-------------------->
function Navbar(){
  return(
    <div className="navbar">
      
      {/* <video autoplay muted loop id="myVideo">
        <source src=". .assets/videos/flower.mp4" type="video/mp4">
    </video> */}
    

      <div className="logo">
        <h1>Flowers</h1>
      </div>

      <div className="lists">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="searchbar">
        <input type="text" placeholder="Search"></input>
      </div>

      <div className="login">
        <button id="btn">Login</button>
        
      </div>

    </div>
  )}

  // <---------------------search section-------------------->

  function Search(){
    return(
      <div className="search">
      
      <div className="search_1">
        <a href="#floweringplants" id="search_1">Flowering Plants</a>
        <a href="#nonfloweringplants" id="search_1">NON-Flowering Plants</a>
        <a href="#decoratingplants" id="search_1">Decoration Plants</a>
        <a href="#fruitingplants" id="search_1">Fruiting Plants</a>
      </div>
</div>
    )}

// <---------------------product section-------------------->
function Products(){
  return(
    <div className="products">
  <h1>FLOWERING PLANTS</h1>

<div id="floweringplants">


<div className="productbox">
        <img src={one} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={two} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={three} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
      </div>


<h1>NON FLOWERING PLANTS</h1>
<div id="nonfloweringplants">
<div className="productbox">
        <img src={four} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br>and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={five} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={six} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
      </div>

<h1>DECORATING PLANTS</h1>
       <div id="decoratingplants">
<div className="productbox">
        <img src={seven} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br>and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={eight} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={nine} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
      </div>

<h1>FRUITING PLANTS</h1>
      <div id="fruitingplants">
<div className="productbox">
        <img src={ten} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br>and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={eleven} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div>
<div className="productbox">
        <img src={twelve} alt="flowers" height="300px" width="200px"></img>
        <p>A flower pot is a container used to grow <br></br> and display flowers and other plants.</p>
      </div> 
      </div> 

 </div>
  )
}

/* <---------------------footer section--------------------> */
// function Footer(){
//   return(
//      <div className="footer">
//       <h1>CONTACT</h1>
//       <p style={{marginTop:"5px"}}>+91 3478631928<br></br>
//       plants@gmail.com</p>
//      </div>
//      <p> We deliver plants, flowers, and trees to your doorstep at the lowest price possible.</p>
//   )}

function Footer()
{
return(
  <footer>
    <div className="footer">
   <div className="contact">
        <h1>CONTACT</h1>
        <p style={{marginTop: "5px"}}>+91 3478631928 <br></br>
           perfumy@gmail.com
       </p>

   </div>
   <p style={{fontSize: "18px", padding: "20px",color:"grey"}}>
   We deliver plants, flowers, and trees to your doorstep at the lowest price possible.
  </p>
  </div>

</footer>
)
}