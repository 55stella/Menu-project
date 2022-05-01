
import './App.css';
import Menu from './data'
import Menus from './Menu'
import { useState } from 'react';
import Categories from './Categories';

const allCategory = Menu.map(item=> item.category)
  let newSet = [ 'All',...new Set(allCategory)]
  console.log(newSet)
  
function App() {
  const[menus, setMenu] =useState(Menu)
  const[categories, setCategories] =useState(newSet)
  console.log(categories)
  
    
  

 const filter =(category)=>{
   if(category === 'All'){
     return setMenu(Menu)
     
   }
   let newItems = Menu.filter(menu=>{
    return menu.category===category
    
   })
   setMenu(newItems)
    
 }
 
    

  return (
    <main className="App">
      <section>
      <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
      </div>
     
      
      <Categories categories ={categories}  filterItems={filter}/>
        {menus.map(menu=>{
         return <Menus {...menu} key ={menu.id} />
        })}

    
      
      </section>
    </main>
  );
}

export default App;
