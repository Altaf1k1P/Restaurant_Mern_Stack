import Card from '../Components/Card.jsx';
import img from "../assets/img4.png"


function Menu() {
  const res = {
    "items": [
      {
        "id": 1,
        "imgSrc": img,
        "title": "Salmon Roll",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price": "$25"
      },
      {
        "id": 2,
        "imgSrc": "https://example.com/tuna-roll.jpg",
        "title": "Tuna Roll",
        "description": "Delicious fresh tuna wrapped in seaweed and rice.",
        "price": "$22"
      },
      {
        "id": 3,
        "imgSrc": "https://example.com/veggie-roll.jpg",
        "title": "Veggie Roll",
        "description": "A healthy mix of fresh vegetables wrapped in sushi rice.",
        "price": "$18"
      }
    ]
  }


  return (
    <>
        <h1 className='text-4xl text-center font-poppins font-bold text-[rgb(57,33,55)] mt-10'>Our Dilicious Dishes</h1>
      <div className='flex justify-center items-center h-screen gap-20'>
        {res.items.map(item => (
          <Card
            key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

    </>
  )
}

export default Menu;