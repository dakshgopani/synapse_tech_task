
import React from "react";
import Card from "../components/Card";
import Grooming from "../assets/grooming.png";
import Training from "../assets/training.png";
import Boarding from "../assets/boarding.png";
import Adoption from "../assets/adoption.png";
import Veterinary from "../assets/veterinary.png";

const services = [
  { name: "Grooming", image: Grooming },
  { name: "Boarding", image: Boarding },
  { name: "Adoption", image: Adoption },
  { name: "Veterinary", image: Veterinary },
  { name: "Training", image: Training },
];

const ServicesPage = () => {
	return (
		<div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
			{/* Header */}
			<header className="border-b pb-2 mb-6 flex items-center gap-2">
				<span className="text-2xl">🐾</span>
				<h1 className="text-xl sm:text-3xl font-bold">Services</h1>
			</header>

			{/* Services Grid */}
			<section className="bg-white p-4 sm:p-6 border rounded-lg shadow-md">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,_1fr)]">
					{services.map((service, index) => (
						<div
							key={index}
							className={
								service.name === "Adoption"
									? "sm:row-span-2 lg:row-span-2" 
									: ""
							}
						>
							<Card image={service.image} title={service.name} />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
