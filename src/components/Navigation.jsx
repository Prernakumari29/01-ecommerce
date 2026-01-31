import React, { useContext } from "react";
import {myStore} from '../ContextAP'


const Navigation = () => {
  let {toggle,setToggle , showCart,setShowCart,currentView, setCurrentView } = useContext(myStore)
  return (
    <div className='bg-gray-600 h-[9%] flex items-center gap-3 justify-between '>
        <h1>logo</h1>
        <input type="text" placeholder='search...' className='bg-gray-100 pr-60 pl-2 rounded p-1'/>
    <div className='flex gap-5 '>
    <button className='bg-white  text-blue-600 font-bold p-2 rounded cursor-pointer active:scale-90' onClick={() => setCurrentView("Add Product")} >Add product</button>
      <button  className='bg-white  text-blue-600 font-bold p-2 rounded cursor-pointer active:scale-90' onClick={() => setCurrentView("products")} >View product</button>
      <button   className='bg-white  text-blue-600 font-bold p-2 rounded cursor-pointer active:scale-90 mr-5' onClick={() => setCurrentView("cart")}>cart</button>
    </div>
    </div>
    
  )
}

export default Navigation
