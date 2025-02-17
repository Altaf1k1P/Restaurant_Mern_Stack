import React from 'react'

function Card({ imgSrc, title, description, price }) {
  return (
    <div>
      <div className="w-[300px] h-auto p-6 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg shadow-gray-300 transition-transform duration-300 ease-in-out overflow-hidden hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_25px_rgba(239,122,30,0.2),0_10px_15px_rgba(0,0,0,0.1)]">
        <img
          className='w-full h-[200px] object-cover mb-4 rounded-xl'
          src={imgSrc}
          alt={title}
        />
        <h3 className='text-[rgb(57,33,55)] text-2xl mb-2 font-poppins font-semibold text-center'>{title}</h3>
        <p className='text-[rgb(109,97,110)] text-base mb-4 text-center leading-6'>{description}</p>
        <span className='inline-block bg-[rgb(239,122,30)] text-white py-2 px-5 text-lg font-bold rounded-full text-center transition-colors duration-300 ease hover:bg-[rgb(255,142,50)]'>{price}</span>
      </div>
    </div>
  )
}

export default Card;