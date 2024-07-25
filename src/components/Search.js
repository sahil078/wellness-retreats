import React from 'react';
const Search = ({ setSearchTerm }) => {
    return (
        <div className="my-4">
            <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search by title..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default Search;
