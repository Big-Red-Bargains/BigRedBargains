import './listings.css';
import React, { useEffect, useState } from 'react';
import Item from '../components/item';
import addIcon from '../Media/add.png';
import sortIcon from '../Media/sort.png';
import Navbar from '../components/navbar/navbar';
import AddListing from '../components/addListing/addListing';

function Listings() {
  const [open, setOpen] = useState(false);

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
          // value={searchInput}
          // onChange={}
          />
          <img id="sortIcon" src={sortIcon} alt="sort icon" />
        </div>
        <div className="table">
          <AddListing isOpen={open} onClose={handleClose} />
          <Item/>
        </div>
      </header>
    </div>
  );
}

export default Listings;
