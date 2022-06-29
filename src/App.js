import "./App.css";
import { useState } from "react";
import axios from "axios";

import Card from "./Components/Card";

function App() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAA5TVVlnC9_B9IBbytM9nFpzuBBY8YfiI"
  );

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=" +
            apiKey +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items));
    }
  };

  return (
    <>
      <div className="header">
        <div className="">
          <h2>Find Your Book</h2>
          <input
            type="text"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
          <button className="">Search</button>
        </div>
      </div>

      <div>{<Card book={bookData} />}</div>
    </>
  );
}

export default App;
