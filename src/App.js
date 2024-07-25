
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Filters from './components/Filters';
import RetreatList from './components/RetreatList';
import Search from './components/Search';
import Pagination from './components/Pagination';
import './index.css';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const[totalPages , setTotalPages] = useState(1);
  const [typeFilter, setTypeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const itemsPerPage = 5;

  const fetchRetreats = async () => {
    try {
      const response = await axios.get(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=5`
      );
      setRetreats(response.data);
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  // Fetch total number of retreats to calculate total pages
  const fetchTotalRetreats = async () => {
    try {
      const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`);
      const totalRetreats = response.data.length; // Get total number of items
      setTotalPages(Math.ceil(totalRetreats / itemsPerPage)); // Calculate total pages
    } catch (error) {
      console.error('Error fetching total retreats:', error);
    }
  };

  useEffect(() => {
    fetchRetreats();
  }, [page]);


  useEffect(() => {
    fetchTotalRetreats();
  });



  useEffect(() => {
    let filtered = retreats;
    console.log(retreats);
    if (searchTerm) {
      filtered = filtered.filter((retreat) =>
        retreat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter) {
      console.log('Filtering by type:', typeFilter);
      filtered = filtered.filter((retreat) => {
        console.log('Retreat tags:', retreat.tag);
        return retreat.tag.includes(typeFilter);
      });
    }

    if (dateFilter) {
      filtered = filtered.filter((retreat) => retreat.date === dateFilter);
    }
    setFilteredRetreats(filtered);
  }, [searchTerm, typeFilter, dateFilter, retreats]);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <Filters setTypeFilter={setTypeFilter} setDateFilter={setDateFilter} />
      <RetreatList retreats={filteredRetreats} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
};

export default App;
