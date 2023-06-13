import React from "react";
import "./Style.css";
const Navbar = () =>  {
return(
    <>
    <div className="container-fluid displaynone">
    <div className="row " style={{display:"flex"}}>
    <div className="col-6 ">
    <div className="top-header-left">
    <div className="navBar">
    <ul className= "navBar-nav me-auto mb-2 mb-lg-0 d-flex">
    <li className="navBar-item">
    <a className="navBar-link active " aria-current="page" href="#">Home</a>
    </li>
    <li className="navBar-item">
    <a className="navBar-link " aria-current="page" href="#">Shop</a>
    </li>
    <li className="navBar-item">
    <a className="navBar-link " aria-current="page" href="#">Blog</a>
    </li>
    <li className="navBar-item">
    <a className="navBar-link " aria-current="page" href="#">Pages</a>
    </li>
    </ul>
    </div>
    </div>
    </div>

    <div className="col-6 ">
    <div className="top-header-right">
    <div className="navBar-right">
    <ul className= "navBar-nav-right me-auto mb-2 mb-lg-0 d-flex">
    <li className="navBar-item-right">
    <a className="navBar-link-right active " aria-current="page" href="#"><i class="fa-regular fa-envelope"></i> <span> info@ricky-shop.com</span></a>
    </li>
    <li className="navBar-item-right">
    <a className="navBar-link-right " aria-current="page" href="#"><i class="fas fa-phone"></i> <span> +123 488 9652</span></a>
    </li>
    <li className="navBar-item-right">
    <a className="navBar-link-right " aria-current="page" href="#"><i class="fa fa-location-dot"></i> <span> 25 West 21th Street, USA</span>  </a>
    </li>
   
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div class="container-fluid">
    <div className="row">
    <div className="col-10">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
 
    <a class="navbar-brand" href="#"><img src="../images/logo.png" style={{width: "150px"}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content: center" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fa-solid fa-shop"></i> <span> shop</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">
        <div className="row">
        <div className="dropdown-list">
        <div className="col-3">
        <div className="grid-layout">
        <ul className="grid-layout-list">
        <h4>Grid Layout</h4>
        <li>Small Layout</li>
        <li>Medium Layout</li>
        <li>Large Layout</li>
        <li>Extra Large</li>
        <li>FullWidth</li>
        <li>Custom Shop Page</li>
        <li>Pop-Up-Card</li>
        </ul>
        </div>
        </div>
        <div className="col-3">
        <div className="grid-layout">
        <ul className="grid-layout-list">
        <h4>Product type</h4>
        <li>2 columns</li>
        <li>2 columns </li>
        <li>3 columns</li>
        <li>Product Image</li>
        <li>Bought Toget</li>
        <li>Bought To</li>
        </ul>
        <ul className="grid-layout-list">
        <h4>Pagination</h4>
        <li>Load More</li>
        <li>Infinity</li>
        </ul>
        </div>
        </div>
        <div className="col-3">
        <div className="grid-layout">
        <ul className="grid-layout-list">
        <h4>Product type </h4>
        <li>Simple </li>
        <li>Variable </li>
        <li>Grouped </li>
        <li>External </li>
        <li>Variation</li>
        <li><ul>HOT</ul></li>
        
        </ul>
        </div>
        </div>
        <div className="col-3">
        <div className="grid-layout">
        <ul className="grid-layout-list">
        <h4>Categories</h4>
        <li>Without Categories</li>
        <li>With Description</li>
        <ul className="grid-layout-list">
        <h4>Brands</h4>
        <li>Brand List 1</li>
        <li>Brand List 2</li>
        <li>Layout 1</li>
        <li>Brand List 2</li>
        <li>Brand List 3</li>
        <li>Brand List 4</li>
        </ul>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-dog"></i><span>dogs</span>
    </a>
    <ul class="dropdown-menu" style={{width: "880px"}} aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="#">     <li><a class="dropdown-item" href="#">
      <div className="row">
      <div className="dropdown-list">
      <div className="col-2">
      <div className="grid-layout">
      <ul className="grid-layout-list">
      <h4>Dogs
      </h4>
      <li> Fresh  </li>
      <li> Toys </li>
      <li> Beds </li>
      <li> Clothes </li>
      <li> Grooming </li>
      <li> Trackers </li>
      </ul>
      </div>
      </div>
      <div className="col-5">
      <div className="grid-layout">
      <ul className="grid-layout-list">
      
      <div className="images-title">
      <img src="./images/img1.png" />
      <div className="title"><span>Royal Canin Modern</span>
      <div className="price"><span>$30.00 - $150.00</span></div>
      </div></div>
      
      
      </ul>
      <ul className="grid-layout-list">
      <div className="images-title">
      <img src="./images/img2.png" />
      <div className="title">Royal Canin Modern 
      <div className="price"><span>$15.00</span></div>
      </div></div>
      </ul>
      <ul className="grid-layout-list">
      <div className="images-title">
      <img src="./images/img3.png" />
      <div className="title">Royal Canin Modern
      <div className="price"><span>$20.00</span></div>
      </div> </div>
      </ul>
      </div>
      </div>
      <div className="col-5">
      <div className="grid-layout">
      <ul className="grid-layout-list">
     <div className="right-image"> <img src="./images/img5.jpg" style={{width:"310px", height:"260px"}}/>
   </div>
      
      </ul>
      </div>
      </div>
     
      </div>
      </div>
      </a></li></a></li>
    </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-cat"></i><span>cat</span>
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <li><a class="dropdown-item" href="#">Food</a></li>
    <li><a class="dropdown-item" href="#">Toys</a></li>
    <li><a class="dropdown-item" href="#">Beds</a></li>
    <li><a class="dropdown-item" href="#">Cleaning & Waste Disposal</a></li>
    <li><a class="dropdown-item" href="#">Litter & Accessories</a></li>
    <li><a class="dropdown-item" href="#">Health & Wellness</a></li>
  </ul>
</li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-fish"></i><span>fish</span> 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Aquariums & Decor</a></li>
            <li><a class="dropdown-item" href="#">Equipment</a></li>
            <li><a class="dropdown-item" href="#">Lighting</a></li>
            <li><a class="dropdown-item" href="#">Fish Food & Feeders</a></li>
            <li><a class="dropdown-item" href="#">Fish Health & Wellness</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-brands fa-github"></i> <span>small pets</span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Food & Treats</a></li>
          <li><a class="dropdown-item" href="#">Habitats & Accessories</a></li>
          <li><a class="dropdown-item" href="#">Care & Health</a></li>
          <li><a class="dropdown-item" href="#">Clothes & Accessories</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fa-solid fa-bug"></i><span>reptiles</span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Food & Treats</a></li>
        <li><a class="dropdown-item" href="#">Habitats & Accessories</a></li>
          <li><a class="dropdown-item" href="#">Care & Health</a></li>
          <li><a class="dropdown-item" href="#">Cleaning & Maintenance</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-brands fa-twitter"></i> <span>birds</span>
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="#">Food & Feeding</a></li>
      <li><a class="dropdown-item" href="#">Bird Cages & Accessories</a></li>
      <li><a class="dropdown-item" href="#">Toys & Perches</a></li>
      <li><a class="dropdown-item" href="#">Health & Grooming</a></li>
      <li><a class="dropdown-item" href="#">Wild Bird Food & Supplies</a></li>
      
    </ul>
  </li>
      </ul>
    </div>
  </div>
  
</nav>
</div>
<div className="col-2">
<div className="icon">
<div className="icon-box">
<i class="fa-solid fa-magnifying-glass"></i>
</div>
<div className="icon-box">
<i class="fa-regular fa-user"></i>
</div>
<div className="icon-box">
<i class="fa-regular fa-heart"></i>
</div>
<div className="icon-box">
<i class="fa fa-cart-shopping"></i>
</div>
</div>
</div>
</div>
  </div>
    </>
)


}

export default Navbar;