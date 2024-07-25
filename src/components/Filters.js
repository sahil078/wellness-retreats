import React from 'react';

const Filters = ({ setTypeFilter, setDateFilter }) => {
    return (
        <div className="flex justify-between my-4">
            <div>
                <label htmlFor="tag" className="block text-sm font-medium text-gray-700">Tag:</label>
                <select
                    id="tag"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="yoga">Yoga</option>
                    <option value="meditation">Meditation</option>
                    <option value="detox">Detox</option>
                </select>
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                <input
                    type="date"
                    id="date"
                    className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => setDateFilter(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Filters;
