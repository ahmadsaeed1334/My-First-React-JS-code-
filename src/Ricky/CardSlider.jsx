import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Style.css";
import background1 from "./images/img5.jpg"
import background2 from "./images/img6.jpg"
import background3 from "./images/img7.jpg"
import background4 from "./images/img8.jpg"
const CardSlider= () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
  return (
    <Carousel responsive={responsive} autoPlay = {true}>
    <div class="card" style={{backgroundImage:`url(${background1})`,  backgroundRepeat: "no-repeat",
    backgroundSize: "cover", height:'200px'}}>
  
  <div className="container">
    <h4><b>New Cat Food</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="card" style={{backgroundImage:`url(${background2})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background3})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background4})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background1})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background2})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background3})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
<div class="card" style={{backgroundImage:`url(${background4})`,  backgroundRepeat: "no-repeat",
backgroundSize: "cover", height:'200px'}}>

<div className="container">
<h4><b>John Doe</b></h4> 
<p>Architect & Engineer</p> 
</div>
</div>
  </Carousel>
  )
}
export default CardSlider;