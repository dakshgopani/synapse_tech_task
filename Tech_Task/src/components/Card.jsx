import React from "react";

const Card = ({ image, title }) => {
	const isAdoption = title === "Adoption";

	return (
		<div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
			<img
				src={image}
				alt={title || "Card image"}
				className={
					isAdoption
						? "w-full h-full object-contain bg-black" // Adoption → fit image fully
						: "w-full h-64 sm:h-80 object-cover" // Others → fixed size with crop
				}
			/>

			{/* Overlay title if provided */}
			{title && (
				<div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
					<h2 className="text-white text-lg sm:text-2xl font-bold">
						{title}
					</h2>
				</div>
			)}
		</div>
	);
};

export default Card;
