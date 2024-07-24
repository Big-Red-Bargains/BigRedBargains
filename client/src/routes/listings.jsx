import './listings.css';
import Item from '../components/item';
import addIcon from '../Media/add.png';
import sortIcon from '../Media/sort.png';
import Navbar from '../components/navbar/navbar';

function Listings() {
  function openAddListing() {

  }
  return (
    <div className="Listings">
      <Navbar />
      <header className="listings-header">
        <div className="table-header">
          <img id="addIcon" src={addIcon} alt="add icon" onClick={openAddListing} />
          <input
            placeholder="search"
            type="text"
          // value={searchInput}
          // onChange={}
          />
          <img id="sortIcon" src={sortIcon} alt="sort icon" />
        </div>
        <div className="table">
          <Item />
        </div>
      </header>
    </div>
  );
}

export default Listings;
