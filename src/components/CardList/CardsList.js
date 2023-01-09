import Card from "../Card/Card";
import "./CardsList.scss";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { sortByComplexity, sortNewFirst, sortOldFirst } from "../../utils/projects-utils";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";

const animateOnTypeChange = (projectType) => {
  const cards = gsap.utils.toArray('.CardWrapper');
  const state = Flip.getState(cards);

  cards.forEach((card, index) => {
    const cardItem = card.querySelector('.Card');

    if (cardItem.dataset.projectType !== projectType) {
      card.style.display = "none";
    } else {
      card.style.display = "block"
    }
    if (projectType === 'all') {
      card.style.display = "block"
    }
  });

  Flip.from(state, {
    duration: 0.45,
    ease: "power1.inOut",
    stagger: 0.06,
    scale: true,
    absolute: true,
    absoluteOnLeave: true,
    onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.33 }),
    onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0.9, duration: 0.33 })
  });
};

const animateOnSort = (sortType, projects) => {
  const cards = gsap.utils.toArray('.CardWrapper');

  gsap.to(cards, { opacity: 0 });

  let projectsData = projects;

  if (sortType === 'new-first') {
    projectsData = sortNewFirst(projects);
  }
  if (sortType === 'old-first') {
    projectsData = sortOldFirst(projects);
  }

  projectsData.forEach((project, index) => {
    const card = cards.find(card => {
      const cardItem = card.querySelector('.Card');
      return cardItem.dataset.projectId === project.id
    });
    card.style.order = index;
  });

  setTimeout(() => {
    gsap.fromTo(cards, { opacity: 0, duration: 0.02, delay: 0.04, }, { opacity: 1 });
  }, 300);
}


const animateOnLoad = (cardListRef) => {
  const q = gsap.utils.selector(cardListRef);

  gsap.fromTo(q(".Card"), { opacity: 0, scale: 0.8, duration: 0.02, delay: 0.04, ease: 'back.out(1.4)' }, { opacity: 1, scale: 1, stagger: 0.1, });
};

function CardsList() {
  const projects = useSelector((state) => state.projects.items);
  const projectType = useSelector((state) => state.form.projectsType);
  const sortType = useSelector((state) => state.form.sortType);

  const sortedProjects = sortNewFirst(projects);

  const cardListRef = useRef();

  useEffect(() => {
    animateOnTypeChange(projectType);
  }, [projectType])

  useEffect(() => {
    animateOnLoad(cardListRef);
  }, [projects]);

  useEffect(() => {
    animateOnSort(sortType, sortedProjects);
  }, [sortType]);

  return (
    <ul className="CardsList" ref={cardListRef}>
      {sortedProjects.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </ul>
  );
}

export default CardsList;
