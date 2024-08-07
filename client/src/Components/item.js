import './item.css';
import React, { useEffect, useState } from 'react';
import sampleItem from '../Media/image.png';
import heartIcon from '../Media/heart.png'

function Item() {

  async function getItems() {
    try {
      const response = await fetch("http://localhost:8000/getItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: localStorage.getItem('token')
        }),
      });

      if (!response.ok) {
        console.error("Error fetching data:", response.statusText);
        return [];
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error accessing endpoint:", error);
      return [];
    }
  }

  function likeItem(){
    console.log("in LIke ")
    let button = document.getElementById("love")
    button.classList.add('item-liked');

    // need to add this specific item to liked item
    // try {
    //   const response = await fetch("http://localhost:8000/addLiked", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       token: localStorage.getItem('token')
    //     }),
    //   });

    //   if (!response.ok) {
    //     console.error("Error fetching data:", response.statusText);
    //     return [];
    //   }

    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   console.error("Error accessing endpoint:", error);
    //   return [];
    // }
  }

  function showItems(){
    // point of function is to only show certain number of items in the table at a time
    
  }

  useEffect(() => {
    const fetchData = async () => {
      // const token = localStorage.getItem('token');
      // if (token) {
      //   try {
      //     const result = await getClasses();
      //     setData(result);
      //   } catch (error) {
      //     setError("Error fetching classes");
      //   } finally {
      //     // setLoading(false);
      //   }
      // } else {
      //   console.error("Token not found");
      //   // setLoading(false);
      // }
    };

    fetchData();
  }, []); // Ensure useEffect runs only once

  return (
    <div className="Item">
      <header className="Item-header">
        <div className="Table">
          <div className="item">
            <img id="love" src={heartIcon} alt = "loveIcon" onClick = {likeItem} />
            <div className="image">
              <img src={sampleItem} />
            </div>
            <div className="info">
              <h2 id="productName">Test Product</h2>
              <p id="description">This product is a testing product.</p>
              <h3 id="cost">$30</h3>
            </div>
          </div>
          <div className="item">
            <img id="love" src={heartIcon} alt = "loveIcon" onClick = {likeItem} />
            <div className="image">
              <img src={sampleItem} />
            </div>
            <div className="info">
              <h2 id="productName">Test Product</h2>
              <p id="description">This product is a testing product.</p>
              <h3 id="cost">$30</h3>
            </div>
          </div>
          <div className="item">
            <img id="love" src={heartIcon} alt = "loveIcon" onClick = {likeItem} />
            <div className="image">
              <img src={sampleItem} />
            </div>
            <div className="info">
              <h2 id="productName">Test Product</h2>
              <p id="description">This product is a testing product.</p>
              <h3 id="cost">$30</h3>
            </div>
          </div>
          <div className="item">
            <img id="love" src={heartIcon} alt = "loveIcon" onClick = {likeItem} />
            <div className="image">
              <img src={sampleItem} />
            </div>
            <div className="info">
              <h2 id="productName">Test Product</h2>
              <p id="description">This product is a testing product.</p>
              <h3 id="cost">$30</h3>
            </div>
          </div>
          <div className="item">
            <img id="love" src={heartIcon} alt = "loveIcon" onClick = {likeItem} />
            <div className="image">
              <img src={sampleItem} />
            </div>
            <div className="info">
              <h2 id="productName">Test Product</h2>
              <p id="description">This product is a testing product.</p>
              <h3 id="cost">$30</h3>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Item;
