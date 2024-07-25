import React from 'react';

const RetreatCard = ({ retreat }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={retreat.image} className="w-full h-48 object-cover" alt={retreat.title} />
            <div className="p-4">
                <h5 className="text-xl font-bold">{retreat.title}</h5>
                <p className="text-gray-700 my-2">{retreat.description}</p>
                <ul className="text-sm text-gray-500">
                    <li>Date: {retreat.date}</li>
                    <li>Location: {retreat.location}</li>
                    <li>Price: ${retreat.price}</li>
                </ul>
            </div>
        </div>
    );
};

export default RetreatCard;
