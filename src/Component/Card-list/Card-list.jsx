import "./Cardlist.css";
import Card from "../Card/Card";

const CardList = ({ monsters }) => {
  return (
    <>
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-list">
            <Card key={monster.id} monster={monster} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
