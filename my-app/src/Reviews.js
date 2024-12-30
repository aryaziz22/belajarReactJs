import React from 'react';
import './App.css';

function Reviews() {

    const users = [
      { 
        id: 1, 
        name: "Andi", 
        review: "Jaket varsity ini sangat nyaman dipakai, bahannya adem dan berkualitas.", 
        imgFile: "andi.jpeg" 
      },
      { 
        id: 2, 
        name: "Budi", 
        review: "Desainnya keren banget, cocok untuk gaya kasual sehari-hari.", 
        imgFile: "budi.jpeg" 
      },
      { 
        id: 3, 
        name: "Citra", 
        review: "Ukuran jaketnya pas, tapi warnanya sedikit berbeda dari foto.", 
        imgFile: "citra.jpeg" 
      },
      { 
        id: 4, 
        name: "Dewi", 
        review: "Pengiriman cepat, jaketnya tebal dan hangat. Suka banget!", 
        imgFile: "dewi.jpeg" 
      },
      { 
        id: 5, 
        name: "Eko", 
        review: "Harganya terjangkau, tapi jahitannya kurang rapi di beberapa bagian.", 
        imgFile: "eko.jpeg" 
      }
    ];  
    const listReview = users.map((itemReview) =>
      <div className="Item" key={itemReview.id}>
      <img src={`img/${itemReview.imgFile}`} alt={`Foto ${itemReview.name}`} />
          <div className="User">
            <h3>{itemReview.name}</h3>
            <p>{itemReview.review}</p>
          </div>
        </div>
    );
  
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

  export default Reviews;