import { createContext, useState } from "react";


export let myStore = createContext();

export let ContextProvider = ({children}) =>{
    
  const [toggle, setToggle] = useState(false)
  
  const [card , setCard] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [cart , setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )
  const [showCart , setShowCart] = useState(false) 

  const [currentView, setCurrentView] = useState("products");
    return(
        <myStore.Provider value={{toggle,setToggle , card , setCard ,cart , setCart , showCart , setShowCart , currentView, setCurrentView}}>{children}</myStore.Provider>
    )
}
