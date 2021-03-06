import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(['suspense']);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://openlibrary.org/subjects/${query}.json`);
      console.log(response.data.works)
      setBooks(response.data.works);
    }
    getData();
  }, [toggle]);

  console.log(books)
  return (
    < div className="App" >
      <Navbar toggle={toggle} setToggle={setToggle} setQuery={setQuery}></Navbar>

      {books.map(book => (
        <div key={book.cover_id}>
          <Card book={book} setBooks={setBooks}></Card>
        </div>
      ))}

    </div >
  );
}

export default App;