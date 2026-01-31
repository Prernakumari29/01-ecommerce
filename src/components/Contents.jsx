import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import {myStore} from '../ContextAP'

const Contents = () => {

  let {toggle,setToggle , card,setCard} = useContext(myStore)

   const{handleSubmit , reset , register} = useForm();

   const submit = (data)=>{
     console.log(data)
     setCard(prev => {
    const updatedArr = [...prev, data];
    localStorage.setItem("products", JSON.stringify(updatedArr));
    return updatedArr;
  });
     reset();
     setToggle(false);
     alert("your Product is added.... ")
   }

  return (
    <div className="h-full flex items-center justify-center">
      
      <form onSubmit={handleSubmit(submit)} className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        
        <h2 className="text-xl font-semibold text-center"> 
          Add Product
        </h2>

        {/* -----------------------------product name------------------------------- */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Product Name
          </label>
          <input
          {...register("productName")}
            type="text"
            placeholder="Enter product name"
            className="border rounded-md px-3 py-2 "
          />
        </div>

        {/* -----------------------------price------------------------------- */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Price
          </label>
          <input
          {...register("price")}
            type="number"
            placeholder="Enter price"
            className="border rounded-md px-3 py-2"
          />
        </div>

        {/* -----------------------------Description------------------------------- */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Description
          </label>
          <textarea
          {...register("description")}
            rows="4"
            placeholder="Enter product description"
            className="border rounded-md px-3 py-2 "
          />
        </div>

        {/* -----------------------------url------------------------------- */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Url
          </label>
          <input
          {...register("url")}
            type="url"
            placeholder="Enter product link"
            className="border rounded-md px-3 py-2"
          />
        </div>

        {/* -----------------------------Submit Button------------------------------- */}
        <button
          type="submit"
          className="
            w-full bg-blue-600 text-white py-2 rounded-md
            transition-transform duration-150
            hover:bg-blue-700
            active:scale-90
          "
        >
          Add Product
        </button>

      </form>
    </div>
  );
};

export default Contents;

