import "./Card.scss";
import { Button } from "primereact/button";
import "../../theme.scss";
import "primereact/resources/primereact.min.css";
import { useEffect, useState } from "react";
import { getProjectImage } from "../../firebase/firebase-api";
import ReactParallaxTilt from "react-parallax-tilt";
import background from "../../assets/img/spinner.svg";
import device from "../../assets/img/projects/device.webp";
import CardTags from "./CardTags/CardTags";
import utils from "../../utils/utils";

import Images from "../../utils/images";

const Card = ({ card }) => {
  const { image, name, deploy, github, importantTech, otherTech, id } = card;

  const isPortfolio = image === "portfolio";

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const visibilityClass = tooltipVisible ? `Card__info--visible` : null;
  const isTouchDeviceClass = utils.isTouchDevice() && `Card__info--always-visible`;

  const backgroundImg = `url("${Images[image]}")`;

  const cardTiltMaxAngle = !utils.isTouchDevice() ? 13 : 0;

  return (
    <ReactParallaxTilt
      tiltMaxAngleX={cardTiltMaxAngle}
      tiltMaxAngleY={cardTiltMaxAngle}
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
        <div className={`Card__info ${visibilityClass} ${isTouchDeviceClass}`}>
          <h3 className="Card__title">{name}</h3>
          {importantTech && (
            <CardTags
              importantTech={importantTech}
              otherTech={otherTech}
              id={id}
            />
          )}
          <div className="Card__buttons-wrapper">
            {!isPortfolio && (
              <Button
                className="Card__button p-button-rounded p-button-raised"
                onClick={() => window.open(deploy, "_blank")}
              >
                Visit Website
              </Button>
            )}

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
