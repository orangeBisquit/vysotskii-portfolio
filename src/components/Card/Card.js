import "./Card.scss";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const IMAGE_BASE_URL = "vysotskii-portfolio.appspot.com/projects-images/";

function Card({ card }) {
  const { image, imgSource, projectName, description, projectSource } = card;
  const imageURL = "vysotskii-portfolio.appspot.com/projects-images/cat.webp";

  return (
    <li className="Card" style={{ backgroundImage: imageURL }}>
      <div className="Card__info">
        <h3 className="Card__title">{projectName}</h3>
        <div className="Card__buttons-wrapper">
          <Button onClick={() => window.open(projectSource, "_blank")}>
            Deploy
          </Button>
          <Button
            className="p-button-success"
            onClick={() => window.open(projectSource, "_blank")}
          >
            Github
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Card;
