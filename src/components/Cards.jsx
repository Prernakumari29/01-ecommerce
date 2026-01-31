import React, { useContext } from "react";
import {myStore} from '../ContextAP'

const Cards = () => {

let { card,cart, setCart} = useContext(myStore)

const addToCart=(product)=>{
    setCart(prev => [...prev ,product])
    console.log("added")
    alert("items added into cart")
}
  return ( 
    <>
    {card.length === 0 && <h1 className="pl-6 font-bold text-red-500 h-14 text-3xl">No Items...</h1>}
    {
        card.map(function(elem , idx){
            return <div key={idx} className=' min-h-[600px] w-[20%]'>
        <div className=' h-[60%]  border-2 ml-4 p-5 mt-4 '>
            <img src={elem.url} className="h-[70%] w-full object-cover " />
             <h1 >{elem.productName}</h1>
             <h1>price:-₹{elem.price}</h1>
             <h1>description:-{elem.description}</h1>
             <button onClick={()=>addToCart(elem)} className="bg-blue-900 text-white px-3 active:scale-90 mt-2">add to card</button>
    </div>
    </div>
        })
    }
    </>
  )
}

export default Cards
