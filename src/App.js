import { filter } from "minimatch";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./Component/Card-list/Card-list";
import Searchbox from "./Component/search-box/Search-box";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchfield, setSearchfield] = useState("");

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

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <>
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox onSearchChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    </>
  );
};

export default App;
