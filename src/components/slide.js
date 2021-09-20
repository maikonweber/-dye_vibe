import React from 'react';
import './slide.css'

export const Slide = (props) => {

 const item = document.querySelector('#items')
 if (!item === null) { 
 item.addEventListener('wheel', (e) => {
    console.log(e)
      
    e.target.scrollBy(300, 0)
    
  })
  }
return (

  <div id="items">
    <div class="item"><img src="https://unsplash.it/1600/400?image=950"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=930"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=990"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=980"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=970"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=976"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=993"/></div>
    <div class="item"><img src="https://unsplash.it/1600/400?image=969"/></div>
  </div>
)
}