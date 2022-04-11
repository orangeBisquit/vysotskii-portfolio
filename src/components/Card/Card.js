import "./Card.scss";
import { Button } from "primereact/button";
import "../../theme.scss";
import "primereact/resources/primereact.min.css";
import { useEffect, useState } from "react";
import { getProjectImage } from "../../firebase/firebase-api";
import ReactParallaxTilt from "react-parallax-tilt";
import background from "../../assets/img/spinner.svg";
import CardTags from "./CardTags/CardTags";

const Card = ({ card }) => {
  const { image, name, deploy, github, importantTech, otherTech, id } = card;

  const [imageUrl, setImageUrl] = useState(null);
  const [imageIsLoading, setImageIsLoading] = useState(true);

  const [tooltipVisible, setTooltipVisible] = useState();

  const visibilityClass = tooltipVisible ? `Card__info--visible` : null;
  const backgroundImg = imageIsLoading
    ? `url("${background}")`
    : `url("${imageUrl}")`;

  useEffect(() => {
    getProjectImage(image, "webp").then((url) => {
      setImageUrl(url);
      setTimeout(() => setImageIsLoading(false), 300);
    });
  }, []);

  return (
    <ReactParallaxTilt
      tiltMaxAngleX={13}
      tiltMaxAngleY={13}
      tiltReverse={true}
      scale={1.08}
    >
      <li
        className="Card"
        style={{
          backgroundImage: backgroundImg,
        }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <div className={`Card__info ${visibilityClass}`}>
          <h3 className="Card__title">{name}</h3>
          {importantTech && (
            <CardTags
              importantTech={importantTech}
              otherTech={otherTech}
              id={id}
            />
          )}
          <div className="Card__buttons-wrapper">
            <Button
              className="Card__button p-button-rounded p-button-raised"
              onClick={() => window.open(deploy, "_blank")}
            >
              Visit Website
            </Button>
            <Button
              className="Card__button p-button-rounded p-button-secondary p-button-raised"
              onClick={() => window.open(github, "_blank")}
            >
              Github
            </Button>
          </div>
        </div>
      </li>
    </ReactParallaxTilt>
  );
};

export default Card;
