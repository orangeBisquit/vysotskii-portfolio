import "./Card.scss";
import "../../theme.scss";
import "primereact/resources/primereact.min.css";

import Images from "../../utils/images";

import { Button } from "primereact/button";

import { useState, } from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import CardTags from "./CardTags/CardTags";

import utils from "../../utils/utils";

const Card = ({ card }) => {
  const { image, name, deploy, github, importantTech, otherTech, id, noSource, noDeploy, message, projectsCount, projectType } = card;

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
      className="CardWrapper"
    >
      <li
        className={`Card ${message ? '_darkened' : ''}`}
        style={{
          backgroundImage: backgroundImg,
        }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        data-project-type={projectType}
        data-project-id={id}
      >
        <div className={`Card__info ${visibilityClass} ${isTouchDeviceClass}`}>
          {name && <h3 className="Card__title">{name}</h3>}
          {message && <p className="Card__message">
            <span className="Card__message-count">{projectsCount}</span>
            <span>{message}</span>
          </p>}
          {importantTech && (
            <CardTags
              importantTech={importantTech}
              otherTech={otherTech}
              id={id}
            />
          )}
          <div className="Card__buttons-wrapper">
            {!noDeploy && (
              <Button
                className="Card__button p-button-rounded p-button-raised"
                onClick={() => window.open(deploy, "_blank")}
              >
                Visit Website
              </Button>
            )}

            {!noSource && <Button
              className="Card__button p-button-rounded p-button-secondary p-button-raised"
              onClick={() => window.open(github, "_blank")}
            >
              Github
            </Button>}
          </div>
        </div>
      </li>
    </ReactParallaxTilt>
  );
};

export default Card;
