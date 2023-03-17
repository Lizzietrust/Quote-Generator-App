import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async() => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error)
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      
    }
  };


  useEffect(() =>{
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <button onClick={quoteAPI}>Get New Quote</button>
      <div className="justify">
        <div className="content">
          <p>{quote}</p>
          <h4>{author}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
