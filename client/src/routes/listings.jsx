import './listings.css';
import React, { useEffect, useState } from 'react';
import Item from '../components/item/item';
import addIcon from '../assets/images/add.png';
import sortIcon from '../assets/images/sort.png';
import Navbar from '../components/navbar/navbar';
import AddListing from '../components/addListing/addListing';

function Listings() {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="Listings">
      <Navbar />
      <header className="listings-header">
        <div className="table-header">
          <img id="addIcon" src={addIcon} alt="add icon" onClick={handleOpen} />
          <input
            id="searchBar"
            placeholder="search"
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <img id="sortIcon" src={sortIcon} alt="sort icon" />
        </div>
        <div className="table">
          <AddListing isOpen={open} onClose={handleClose} />
          <Item searchQuery={searchInput}/>
        </div>
      </header>
    </div>
  );
}

export default Listings;
