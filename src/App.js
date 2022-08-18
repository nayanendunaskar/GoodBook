import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Polity: [
    { name: "10 NCERT-Class-Political-Science", rating: "5/5" },
    { name: "11 NCERT-Class-Political-Science-Part-1", rating: "5/5" },
    { name: "11 NCERT-Class-Political-Science-Part-2-1", rating: "5/5" },
    { name: "12 NCERT-Class-Political-Science-Part-1", rating: "5/5" },
    { name: "12 NCERT-Class-Political-Science-Part-2", rating: "5/5" }
  ],

  History: [
    {
      name: "11 Class 11-12 – Medieval Indian History by Satish Chandra",
      rating: "5/5"
    },
    {
      name: "11 Class-11-Ancient-India-RS-Sharma",
      rating: "5/5"
    },
    {
      name: "12 Modern India - BipinChandra",
      rating: "5/5"
    },
    {
      name: "History_class11_TN_Board",
      rating: "5/5"
    },
    {
      name: "History_class12_TN_Board",
      rating: "5/5"
    },
    {
      name: "Class-12-Contemporary-World-History-Anwarul-Haq",
      rating: "5/5"
    }
  ],
  Biology: [
    {
      name: "NCERT-Class-11-Biology (176-345pgs) unit 4-5",
      rating: "5/5"
    },
    {
      name: "NCERT-Class-12-Biology (146-311) unit- 8,9,10",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Biology");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 UPSC BOOKS NCERT </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout my favorite books for UPSC. Choose any subject to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "1.7rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
