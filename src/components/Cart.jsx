import React, { useContext } from 'react'
import { myStore } from '../ContextAP'

const Cart = () => {

    let {cart} = useContext(myStore)
  return (
    <>
    {cart.length === 0 && <h1 className="pl-4 font-bold text-red-500 h-14 text-3xl" >Your Cart is empty...</h1>}
    {
        cart.map(function(item  , idx){
            return <div key={idx} className='flex flex-col h-28 border-2 ml-40 mr-40 ' >
      <div className='flex justify-between '>
        <img src={item.url} alt="" className='h-24 w-fit' />
        <div> 
            <h1>ProductName--:{item.productName}</h1>
            <h2>ProductItem--:{item.description}</h2><br />
            <h3 className='text-red-600'>Price :₹{item.price}</h3>
        </div>
      </div>
    </div>
        })
    }
    </>
  )
}

export default Cart
