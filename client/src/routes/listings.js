import './listings.css';
import Item from '../Components/item';
import addIcon from '../Media/add.png';
import sortIcon from '../Media/sort.png';

function Listings() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table-header">
          <img src={addIcon} alt="add icon" />
          <input 
            placeholder="search"
            type="text" 
            // value={searchInput}
            // onChange={}
          />
          <img src={sortIcon} alt="sort icon" />
        </div>
        <div className="table">
          <Item />
        </div>
      </header>
    </div>
  );
}

export default Listings;
