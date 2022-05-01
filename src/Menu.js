import React from 'react'

const Menus = ({ title, price, img, desc}) => {

  return (
    <section className='display'>
    
   <div className='food-menus'>
       <figure>
       <img src={img} alt={title} />
       </figure>
       <div>
           <div className='title-price'>
           <h3>{title}</h3>
            <h4>${price}</h4>
            </div>
            <div></div>
            <p>{desc}</p>

       </div>

   </div>


    </section>
  )
}

export default Menus