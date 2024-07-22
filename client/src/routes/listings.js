import './listings.css';
import Item from '../components/item.js';
import addIcon from '../Media/add.png';
import sortIcon from '../Media/sort.png';

function Listings() {
  function openAddListing (){

  }
  return (
    <div className="Listings">
      <header className="listings-header">
        <div className="table-header">
          <img id = "addIcon" src={addIcon} alt="add icon" onClick = {openAddListing} />
          <input 
            placeholder="search"
            type="text" 
            // value={searchInput}
            // onChange={}
          />
          <img id = "sortIcon" src={sortIcon} alt="sort icon" />
        </div>
        <div className="table">
          <Item />
        </div>
      </header>
    </div>
  );
}

export default Listings;
