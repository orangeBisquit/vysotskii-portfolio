import Card from "../Card/Card";
import "./CardsList.scss";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { sortByComplexity } from "../../utils/projects-utils";
import { gsap } from "gsap";

function CardsList() {
  const projects = useSelector((state) => state.projects.items);

  const sortedProjects = sortByComplexity(projects);

  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.fromTo(q(".Card"), { opacity: 0, scale: 0.8, duration: 0.12, delay: 0.1, ease: 'back.out(1.4)' }, { opacity: 1, scale: 1, stagger: 0.13, });
  }, [projects]);

  return (
    <ul className="CardsList" ref={el}>
      {sortedProjects.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

export default CardsList;
