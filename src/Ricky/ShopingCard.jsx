import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Style.css";
const ShoppingCard = () => {

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

    return(
        <>
        
        <div className="training-section">
        
        <div className="row">
        <Carousel responsive={responsive}>
        <div className="training-item">
        
        <img src="./images/card1.jpg" className="top-img"/>
        <img src="../images/card2.png " />

        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        <img src="./images/card3.png"/>
        <img src="../images/card4.png " className="top-img"/>
        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
       
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        <img src="./images/card43.png"/>
        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
       
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        <img src="./images/card5.png"/>
        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
       
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
      
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        
        <img src="./images/card1.jpg" className="top-img"/>
        <img src="../images/card6.png " />

        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        
        <img src="./images/card1.jpg" className="top-img"/>
        <img src="../images/card7.png " />

        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>
        <div className="training-item">
        
        <img src="./images/card1.jpg" className="top-img"/>
        <img src="../images/card8.png " />

        <div className="rate">
        <li>Solid:<span>3</span></li>
        <li>Available:<span>47</span></li></div>
        <h5>Advanced Nutrition Seed, Grain</h5>
        <p>Keep your feathered friend feeling strong and looking healthy.</p>
        <div className="form-card">
        <div className="card-title">
        <h6>Food & Freeding . Greenies</h6>
        
        <div className="price-icon">
        <li className="Price">
        
        $20.00</li>
        <li className="icon"><i class="fa-solid fa-cart-shopping"></i></li></div>
        </div>
        </div>
        </div>

        </Carousel> 
        </div>
        </div>
     
        
        </>
    )
}
export default ShoppingCard;