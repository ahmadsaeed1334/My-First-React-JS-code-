import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImagesSlider = () => {
    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=81',
          caption: 'Shop Now'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=82',
          caption: 'Shop Now'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=83',
          caption: 'Shop Now'
        },
      ];
      const spanStyle = {
        padding: '20px',
        background: '#091727',
        color: '#fff',
        borderRadius: '50px',
        border: 'none',
        fontSize: '20px'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        padding:'80px',
        paddingTop:'160px',
        backgroundSize: 'cover',
        height: '400px'
      }
    return(
        <>
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <button style={spanStyle}>{slideImage.caption}</button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  
        </>
    );



}

export default ImagesSlider;