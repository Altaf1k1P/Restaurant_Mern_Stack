import React from "react";

function Menu() {

  return (
    <>
      
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d0] bg-[#fbf8f8] p-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/99446114-17f4-4e44-8f5a-77a5c6af10c9.png")`}}
                ></div>
                <h2 className="text-[#1b0e0e] text-base font-bold leading-tight">Noodles</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d0] bg-[#fbf8f8] p-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/54fa5f9d-f81d-4a97-93bc-b5624ecfab97.png")`}}
                ></div>
                <h2 className="text-[#1b0e0e] text-base font-bold leading-tight">Rice Bowls</h2>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e6d1d0] bg-[#fbf8f8] p-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/cc295a3e-a740-4645-abb2-554d3411c482.png")`}}
                ></div>
                <h2 className="text-[#1b0e0e] text-base font-bold leading-tight">Salads</h2>
              </div>
            </div>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Noodles</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/47072d19-9472-42d3-bf78-f9986040d659.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Sesame Noodles</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$10.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e0afa407-515f-4cea-92ff-4e08a4e5de4b.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Beef Noodle Soup</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$12.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/46fe39e2-bba5-4884-83a5-6799c1cf63d0.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Dan Dan Noodles</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$13.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/13b17f63-3766-42cd-9103-1937a6389e2e.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Spicy Cold Noodles</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$11.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/7ba907e7-eeec-423b-ac71-3ed25df81967.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Vegetable Lo Mein</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$9.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/0fdc9f3f-5d59-40c8-8f78-3d42d6a883d7.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Shrimp Pad Thai</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$14.99</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Rice Bowls</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/ded8b9bd-1c78-4f78-89f5-744c983b1c3a.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Orange Chicken Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$11.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/292a47f4-7f0e-458e-8372-31df0b5349f4.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Teriyaki Steak Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$13.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/b2c3f6ce-8d18-42dd-ba6f-1cff9233a071.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Curry Tofu Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$12.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/ab88d6a9-2472-4eb7-8bcb-b707b2987fd5.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Sweet and Sour Pork Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$10.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e282863a-5902-43b6-8c3e-734dd0e47948.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Mongolian Beef Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$14.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/f8ccfdc6-a395-4b58-a222-ea2932989591.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Coconut Shrimp Bowl</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$15.99</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Salads</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/cab3bcf5-7987-45aa-bd13-e03b5083d0fa.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Asian Chicken Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$10.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/c87d79fc-a0eb-4c5b-b100-964690ad1a82.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Crispy Tofu Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$11.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/fe0784ae-005c-40fa-9d9b-cb6e40ca6b01.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Sesame Seared Ahi Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$13.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/b3f975ac-64ef-4f78-b04a-749eb64ab720.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Ginger Soy Glazed Salmon Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$14.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/84882765-79f7-4052-9f82-47ee782f7763.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Thai Beef Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$12.99</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/3a95c011-6ae5-48a1-a130-1d4920fabdbc.png")`}}
                ></div>
                <div>
                  <p className="text-[#1b0e0e] text-base font-medium leading-normal">Miso Sriracha Roasted Veggie Salad</p>
                  <p className="text-[#96524f] text-sm font-normal leading-normal">$12.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default Menu;


// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const menuItems = [
//   { id: 1, name: "Burger", category: "Fast Food", price: 5 },
//   { id: 2, name: "Pizza", category: "Fast Food", price: 8 },
//   { id: 3, name: "Salad", category: "Healthy", price: 6 },
//   { id: 4, name: "Pasta", category: "Italian", price: 10 },
//   { id: 5, name: "Sushi", category: "Japanese", price: 12 },
// ];

// const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

// const Menu = () => {
//   const [filteredItems, setFilteredItems] = useState(menuItems);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filterMenu = (category) => {
//     setActiveCategory(category);
//     if (category === "All") {
//       setFilteredItems(menuItems);
//     } else {
//       setFilteredItems(menuItems.filter((item) => item.category === category));
//     }
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto text-center">
//       <h1 className="text-3xl font-bold mb-4">Menu</h1>
//       <div className="flex justify-center gap-4 mb-6">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full transition-all duration-300 ${
//               activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => filterMenu(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <motion.div layout className="grid grid-cols-1 gap-4">
//         {filteredItems.map((item) => (
//           <motion.div
//             key={item.id}
//             layout
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
//           >
//             <span className="text-lg font-medium">{item.name}</span>
//             <span className="text-blue-500 font-semibold">${item.price}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Menu;
