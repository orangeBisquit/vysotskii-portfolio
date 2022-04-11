import Card from "../Card/Card";
import "./CardsList.scss";
import { useSelector } from "react-redux";
import { sortByComplexity } from "../../utils/projects-utils";

function CardsList() {
  const projects = useSelector((state) => state.projects.items);

  const sortedProjects = sortByComplexity(projects);

  return (
    <ul className="CardsList">
      {sortedProjects.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

export default CardsList;
