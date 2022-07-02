import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBIKYk6ddRdmmLTb4M6f5JbNQsT-2JVg6M"
  );

  const handleChangeBook = (e) => {
    setBook(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`
      )
      .then((data) => {
        // setResult(data.data.items);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <h1>Find Your Book</h1>
        <form onSubmit={searchBook}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Book Name"
              autoComplete="off"
              value={book}
              onChange={handleChangeBook}
            />
          </div>

          <button className="btn btn-danger">Search</button>
        </form>

        {result.map((book) => {
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />;
          </a>;
        })}
      </div>
    </>
  );
}

export default App;
