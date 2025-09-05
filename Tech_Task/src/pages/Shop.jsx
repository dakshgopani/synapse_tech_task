// src/ShopPage.jsx
import React from "react";
import Card from "../components/Card";
import { Search } from "lucide-react"; // using lucide-react icons
import CatImage1 from "../assets/cat_img_1.png";
import CatImage2 from "../assets/cat_img_2.png";
import CatImage3 from "../assets/cat_img_3.png";

const ShopPage = () => {
	return (
		<div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
			{/* Header */}
			<header className="flex justify-between items-center border-b pb-2 mb-6">
				<h1 className="text-xl sm:text-3xl font-bold">🐾 Shop</h1>

				{/* Mobile Search Icon */}
				<button className="sm:hidden p-2 rounded-full hover:bg-gray-200">
					<Search className="w-5 h-5 text-gray-600" />
				</button>

				{/* Desktop Search Input */}
				<div className="relative hidden sm:block">
					<input
						type="text"
						placeholder="Search"
						className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 w-40 sm:w-64"
					/>
					<Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
				</div>
			</header>

			{/* Featured Section */}
			<section className="bg-white p-4 sm:p-6 border rounded-lg shadow-md">
				<h2 className="text-lg sm:text-2xl font-semibold mb-4">
					Featured Products
				</h2>

				{/* Categories */}
				<div className="flex flex-wrap justify-center gap-2 mb-6">
					<button className="bg-blue-600 text-black px-4 py-1.5 text-sm rounded-full">
						Random
					</button>
					<button className="text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-200">
						Cat
					</button>
					<button className="text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-200">
						Dogs
					</button>
					<button className="text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-200">
						Fish
					</button>
					<button className="text-gray-600 px-4 py-1.5 text-sm rounded-full hover:bg-gray-200">
						Birds
					</button>
				</div>

				{/* Products */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card image={CatImage1} />
					<Card image={CatImage2} />
					<Card image={CatImage3} />
				</div>

				<div className="mt-6 text-center sm:text-right">
					<a href="#" className="text-blue-600 font-semibold hover:underline">
						View More &gt;&gt;
					</a>
				</div>
			</section>
		</div>
	);
};

export default ShopPage;
