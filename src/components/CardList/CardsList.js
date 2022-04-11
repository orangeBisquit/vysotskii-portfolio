import Card from "../Card/Card";
import "./CardsList.scss";
import { useSelector } from "react-redux";

function CardsList() {
  const projects = useSelector((state) => state.projects.items);

  return (
    <ul className="CardsList">
      {projects.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

export default CardsList;
