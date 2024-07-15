import './listings.css';
import Item from '../Components/item'

function Listings() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "table-header">
          <input placeholder='search'></input>
        </div>
        <div className = "table">
          <Item/>
        </div>
      </header>
    </div>
  );
}

export default Listings;
