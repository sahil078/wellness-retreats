import React from 'react';

const Pagination = ({ page, setPage , totalPages }) => {

    const handleNext = () => {
        if (page >= totalPages) {
            setPage(1); // Loop back to the first page
        } else {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page <= 1) {
            setPage(totalPages); // Loop back to the last page
        } else {
            setPage(page - 1);
        }
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="inline-flex items-center space-x-2 mt-4">
                <li>
                    <button
                        className={`px-3 py-2 bg-white border border-gray-300 rounded-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                </li>
                <li>
                    <button
                        className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
