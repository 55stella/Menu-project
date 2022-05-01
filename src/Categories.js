import React from 'react'






const Categories = ({filterItems,categories}) => {
    
    // console.log(title)
   return(
   
<div className='button'>
    {categories.map((category, index)=>{
       return ( 
       <button type ='category' onClick={()=>filterItems(category)} key ={index}>
           {category}</button>
       ); 
    })}
    
    {/* <button onClick={()=>filterItems('all')}>All</button>
    <button onClick={()=>filterItems('breakfast')}>Breakfast</button> */}
</div>
  



);
}
        
    

        


export default Categories