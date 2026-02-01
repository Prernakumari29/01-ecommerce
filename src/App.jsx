import React, { useContext } from "react";
import Navigation from './components/Navigation'
import Contents from './components/Contents'
import {myStore} from './ContextAP'
import Cards from "./components/Cards";
import Cart from "./components/Cart";


const App = () => {

  let {toggle,setToggle,showCart,currentView} = useContext(myStore)
  return (
    // <div className='h-screen flex flex-col gap-2 ' >
    //   <Navigation />
      

      
    //     {/* <Contents /> */}
    //     {toggle ? <Contents />
    //      :<div className="flex flex-wrap gap-3">
    //        <Cards />
    //      </div> }

    //      {showCart ? <Cart /> : <p>noooooo</p>}   
      
    // </div>






    <div className='h-screen flex flex-col gap-2'>
      <Navigation />
    
      
       {currentView === "Add Product" && <Contents />}
      {currentView === "products" && (
        <div className="flex flex-wrap gap-3">
          <Cards />
        </div>
      )}
      {currentView === "cart" && <Cart />}
    </div>
  )
}

export default App
