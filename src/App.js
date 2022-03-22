import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [simpsons, setSimpsons] = React.useState({
    quote: "",
    character: "",
    image: "",
  });

  function getQuotes() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0].quote);
        console.log(data[0].character);
        setSimpsons({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }

  return (
    <div className="App">
      <p>{simpsons.character}</p>
      <img src={simpsons.image} alt={simpsons.character} />
      <p>{simpsons.quote}</p>

      <button onClick={getQuotes}>Cliquez-moi</button>
    </div>
  );
}

export default App;
