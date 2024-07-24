import './item.css';
import React, { useEffect, useState } from 'react';
import sampleItem from '../Media/image.png';
import heartIcon from '../Media/heart.png';

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
      name: item[0],
      description: item[1],
      image: item[2]
    }));
    console.log(data)

    return data;
  } catch (error) {
    console.error("Error accessing endpoint:", error);
    return [];
  }
}

function Item() {
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
  }, []);

  const likeItem = (itemId) => {
    // Placeholder for like functionality
    console.log(`Item ${itemId} liked`);
  };

  return (
    <div className="Item">
      <header className="Item-header">
        <div className="Table">
          {data.length === 0 ? (
            <p>No items found.</p>
          ) : (
            data.map((item, index) => (
              <div className="item" key={index}> {/* Use index or unique ID as key */}
                <img
                  className="love-icon"
                  src={heartIcon}
                  alt="loveIcon"
                  onClick={() => likeItem(index)} // Pass index or unique identifier
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
