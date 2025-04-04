import React, { useState } from "react";

const Card = ({ menuItems }) => {
    const [cart, setCart] = useState({});

    // Function to increase quantity
    const increaseQuantity = (dishName) => {
        setCart((prevCart) => ({
            ...prevCart,
            [dishName]: (prevCart[dishName] || 0) + 1
        }));
    };

    // Function to decrease quantity
    const decreaseQuantity = (dishName) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[dishName] > 1) {
                updatedCart[dishName] -= 1;
            } else {
                delete updatedCart[dishName]; // Remove from cart when quantity is 0
            }
            return updatedCart;
        });
    };

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {menuItems.map((dish, index) => (
                        <div key={index} className="flex flex-col gap-3 pb-3">
                            <div
                                className="w-full h-40 sm:h-52 bg-center bg-no-repeat bg-cover rounded-xl"
                                style={{ backgroundImage:`url(${dish.img})` }}
                            ></div>
                            <p className="text-[#1b0e0e] text-base font-medium leading-normal">{dish.name}</p>
                            {cart[dish.name] ? (
                               <div 
                               className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#e5302a] text-white text-sm sm:text-base font-bold"
                           >                                   
                            <button onClick={() => decreaseQuantity(dish.name)} className="px-3 text-lg">-</button>
                           <span>{cart[dish.name]}</span>
                           <button onClick={() => increaseQuantity(dish.name)} className="px-3 text-lg">+</button>
                           </div>

                            ):(
                              <button 
                              className="flex justify-center items-center bg-[#e5302a] text-white font-bold rounded-xl h-10 px-4"
                              onClick={() => increaseQuantity(dish.name)}
                          >
                              Add
                          </button>
                            )}
                           
                        </div>
                    ))}
                </div>
      </>
       
    );
};

export default Card;
