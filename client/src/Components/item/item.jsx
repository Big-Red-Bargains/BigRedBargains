import './item.css';
import React, { useEffect, useState } from 'react';
import sampleItem from '../../assets/images/defaultItem.png';
import heartIcon from '../../assets/images/heart.png';

let savedItems = new Set()
// Fetch and transform items
export async function getItems() {
  try {
    const response = await fetch("http://localhost:8000/getItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("Error fetching data:", response.statusText);
      return [];
    }

    const rawData = await response.json();
    // Transform the rawData into an array of objects
    const data = rawData.map(item => ({
      id: item[0],
      name: item[1],
      description: item[2],
      image: item[3],
      saved: item[4]
    }));

    // Set liked stated for all liked items
    for (let i = 0; i < data.length; i++) {
      let val = data[i]
      if (val.saved === true) {
        savedItems.add(val.id)
        let item = document.querySelector(`[data-item-id="${val.id}"]`);
        if (item) {
          item.classList.add('item-liked');
        }
      }
    }
    console.log(savedItems)
    return data;
  } catch (error) {
    console.error("Error accessing endpoint:", error);
    return [];
  }
}

function Item({ searchQuery }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItems();
        setData(result);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []); // Dependency array is empty, ensuring this effect runs only once on mount

  async function likeItem(index, itemId) {
    // Need to save/unsave this liked item into the DB
    // Check if this id is in the currently saved items, if it is not:
    if (savedItems.has(itemId) == false) {
      const formData = {
        itemId: data[index].id,
        saved: true
      };

      try {
        const response = await fetch("http://localhost:8000/saveItem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error accessing endpoint:", error);
      }

      // Placeholder for like functionality
      let item = document.querySelector(`[data-item-id="${itemId}"]`);
      if (item) {
        item.classList.add('item-liked');
      }
    }
    else{ // need to unsave item
      try {
        const formData = {
          itemId: data[index].id,
          saved: false
        };

        const response = await fetch("http://localhost:8000/saveItem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error accessing endpoint:", error);
      }

      // Placeholder for like functionality
      let item = document.querySelector(`[data-item-id="${itemId}"]`);
      if (item) {
        item.classList.remove('item-liked');
      }
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Item">
      <header className="Item-header">
        <div className="Table">
          {filteredData.length === 0 ? (
            <p>No items found.</p>
          ) : (
            filteredData.map((item, index) => (
              <div className="item" key={item.id}>
                <img
                  data-item-id={item.id}
                  className="love-icon"
                  src={heartIcon}
                  alt="loveIcon"
                  onClick={() => likeItem(index, item.id)} // Consider using unique identifier if available
                />
                <div className="image">
                  <img src={item.image || sampleItem} alt={item.name || "Sample"} />
                </div>
                <div className="info">
                  <h2 className="productName">{item.name}</h2>
                  <p className="description">{item.description}</p>
                  <h3 className="cost">$30</h3> {/* Fallback price */}
                </div>
              </div>
            ))
          )}
        </div>
      </header>
    </div>
  );
}

export default Item;
