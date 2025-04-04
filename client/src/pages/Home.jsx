import React from "react";
import { Link } from 'react-router';
import Card from "../Components/Card";

const Home = () => {
   
    const menuData = [
        { img: "https://cdn.usegalileo.ai/sdxl10/71e9ba7d-9f96-419e-b68c-1bcc9a01fbd8.png", name: "Spaghetti Bolognese" },
        { img: "https://cdn.usegalileo.ai/sdxl10/536112b1-fcff-4a9a-be5f-7b9d3a8ba2af.png", name: "Margherita Pizza" },
        { img: "https://cdn.usegalileo.ai/sdxl10/10d71a8b-880e-47dd-b909-1c357dbcb753.png", name: "Caesar Salad" },
        { img: "https://cdn.usegalileo.ai/sdxl10/850a6be4-14f6-4566-ae9a-752670dd05cb.png", name: "Tiramisu" }
    ];

    return (
        <div className="px-4 sm:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-[320px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), 
                                    url("https://cdn.usegalileo.ai/sdxl10/0c2a2687-b027-43b3-9699-f669a91d190f.png")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="flex flex-col gap-2 text-left">
                                <h1 className="text-white text-2xl sm:text-5xl font-black leading-tight">
                                    Welcome to Pasta House
                                </h1>
                                <h2 className="text-white text-sm sm:text-base font-normal">
                                    We are a family-owned and operated Italian restaurant located in the heart of San Francisco. We offer a variety of authentic Italian dishes made from the
                                    freshest ingredients.
                                </h2>
                            </div>
                            <Link to={"/menu"} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#e5302a] text-white text-sm sm:text-base font-bold">
                                <span className="truncate">Order Now</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <h2 className="text-[#1b0e0e] text-lg sm:text-[22px] font-bold leading-tight px-4 pb-3 pt-5">About Us</h2>
                <p className="text-[#1b0e0e] text-sm sm:text-base font-normal pb-3 pt-1 px-4">
                    Pasta House is a family-owned and operated Italian restaurant located in the heart of San Francisco. We offer a variety of authentic Italian dishes made from the freshest ingredients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <Card menuItems={menuData}/>
                </div>

                <div className="@container">
                    <div className="flex flex-col gap-6 px-4 py-10 sm:gap-8 sm:flex-row">
                        <div
                            className="w-full h-64 sm:min-h-[400px] bg-center bg-no-repeat bg-cover rounded-xl"
                            style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/72827493-7258-4009-b5e6-50e06c2b6466.png")` }}
                        ></div>
                        <div className="flex flex-col gap-6 sm:min-w-[400px] sm:gap-8 sm:justify-center">
                            <h1 className="text-[#1b0e0e] text-2xl sm:text-5xl font-black leading-tight">
                                Try our best dish today!
                            </h1>
                            <h2 className="text-[#1b0e0e] text-sm sm:text-base font-normal">
                                Our signature dish - Spaghetti Carbonara. Made with pancetta, pecorino cheese, and egg yolk, this classic Roman pasta dish is rich, creamy, and absolutely delicious.
                            </h2>
                            <Link to={"/menu"} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#e5302a] text-white text-sm sm:text-base font-bold">
                                <span className="truncate">Order Now</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="@container">
                    <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20">
                        <h1 className="text-[#1b0e0e] text-2xl sm:text-4xl font-bold text-center max-w-[720px]">
                            Subscribe to our newsletter
                        </h1>
                        <div className="flex justify-center">
                            <label className="flex flex-col w-full max-w-[480px] h-14 sm:h-16">
                                <div className="flex w-full h-full items-stretch rounded-xl">
                                    <input
                                        placeholder="Enter your email"
                                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e8e8] placeholder:text-[#96524f] px-4 rounded-r-none text-sm sm:text-base"
                                    />
                                    <div className="flex items-center justify-center rounded-r-xl bg-[#f3e8e8] pr-2">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#e5302a] text-white text-sm sm:text-base font-bold">
                                            <span className="truncate">Subscribe</span>
                                        </button>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
