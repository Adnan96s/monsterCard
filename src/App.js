import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://jsonplaceholder.typicode.com/users`;
      const response = await fetch(URL);
      const resJson = await response.json();
      console.log(resJson, "asdad");
      setMonsters(resJson);
    };
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
    </div>
  );
};

export default App;
